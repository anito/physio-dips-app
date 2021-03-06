<script context="module">
  import * as api from "api";
  import { users } from "../../stores/userStore";
  import { videos } from "../../stores/videoStore";

  export async function preload({ query }, { user }) {
    let usersData, videoData;

    const resUsers = await api.get("users", user && user.token);

    if (resUsers.success) {
      users.update(resUsers.data);
      usersData = resUsers.data;
    } else {
      this.error(
        (resUsers.data && resUsers.data.code) || resUsers.status,
        resUsers.message || resUsers.responseText
      );
    }

    const resVideo = await api.get("videos", user && user.token);

    if (resVideo.success) {
      videos.update(resVideo.data);
      videoData = resVideo.data;
    } else {
      this.error(
        (resVideo.data && resVideo.data.code) || resVideo.status,
        resVideo.message || resVideo.responseText
      );
    }

    return { usersData, videoData, ...query };
  }
</script>

<script>
  import { stores, goto } from "@sapper/app";
  import Layout from "./layout.svelte";
  import { SimpleUserCard } from "components";
  import Paper, { Title } from "@smui/paper";
  import Fab, { Label } from "@smui/fab";
  import Textfield, { Input, Textarea } from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text";
  import List from "@smui/list";

  const { session } = stores();
  const TAB = "time";

  let selectionIndex;
  let search = "";

  export let segment; // user.id (or slug) in case we start from a specific user e.g. /users/23
  // from preload
  export let usersData = [];
  export let videoData = [];
  export let tab = TAB;

  // update stores with what we got from preload
  users.update(usersData);
  videos.update(videoData);

  $: selectionUserId = segment;
  $: tab = ((t) => (!t && TAB) || t)(tab);
  $: filteredUsers = $users.filter(
    (user) => user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  async function addUser() {
    await goto("users/add");
  }
</script>

<Layout sidebar>
  <slot />
  <div class="sidebar" slot="side" style="flex: 1;">
    <div class="flex flex-col p-2">
      <Textfield
        variant="filled"
        withTrailingIcon
        bind:value={search}
        label="nach Namen suchen"
        input$aria-controls="helper-text"
        input$aria-describedby="helper-text"
      >
        <Icon tabindex="1" class="material-icons" on:click={() => (search = "")}
          >search</Icon
        >
      </Textfield>
      <HelperText id="helper-text">tippe etwas um Namen zu finden</HelperText>
    </div>
    {#if $users.length}
      <List
        class="users-list"
        twoLine
        avatarList
        singleSelection
        bind:selectedIndex={selectionIndex}
      >
        {#each filteredUsers as user (user.id)}
          <a rel="prefetch" href="users/{user.id}?tab={tab}">
            <SimpleUserCard class="flex" {selectionUserId} {user} />
          </a>
        {/each}
      </List>
    {:else}
      <div class="paper-container flex justify-center">
        <Paper color="primary">
          <Title style="color: var(--text-light)">
            Keine Benutzer vorhanden
          </Title>
        </Paper>
      </div>
    {/if}
  </div>
  <div slot="ad" />
  <div slot="footer" />
</Layout>
{#if $session.role === "Administrator"}
  <div class="fab-add-user">
    <Fab class="floating-fab" color="primary" on:click={addUser} extended>
      <Label>Neuer Klient</Label>
      <Icon class="material-icons">person_add</Icon>
    </Fab>
  </div>
{/if}

<style>
  .paper-container {
    display: flex;
    flex: 1;
    justify-content: center;
  }
  .fab-add-user {
    position: absolute;
  }
  :global(.datapicker--open) .fab-add-user,
  :global(.add-user-view--open) .fab-add-user {
    display: none;
  }
  :global(.grid:not(.sidebar) .grid-item.side) {
    display: none;
  }
</style>
