import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies }) => {
		console.log('hit action');

		cookies.delete('session', { path: '/' });

		throw redirect(302, '/');
	}
};
