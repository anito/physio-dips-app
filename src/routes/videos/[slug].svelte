<script context="module">
  import * as api from "api";

  export async function preload({ params, query }, { user }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await api.get(`videos/${params.slug}`, user && user.token);

    if (res && res.success) {
      return res.data;
    } else {
      this.error(
        (res.data && res.data.code) || res.status,
        res.message || res.responseText
      );
    }
  }
</script>

<script>
  import { Display } from "components";

  export let id;
  export let image_id;
  export let title;
  export let description;
  export let src;
  export let filesize;
  export let user_id;
  export let sequence;
  export let modified;
  export let created;

  const { ...data } = {
    id,
    image_id,
    title,
    description,
    src,
    filesize,
    user_id,
    sequence,
    modified,
    created,
  };
</script>

<Display {data} />
