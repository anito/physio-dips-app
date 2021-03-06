import * as api from 'api';

export function post(req, res) {
	const user = req.body;

	api.post('users/login', { ...user }).then(response => {
		
		if (response.success && response.data.user) {
			// what will be saved in file session
			response.data.user
				&& (req.session.user = response.data.user)
			response.data.user.group.name === "Administrator" && (req.session.groups = response.data.groups);
		}
		res.setHeader('Content-Type', 'application/json');

		res.end(JSON.stringify(response));
	});
}