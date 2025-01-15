import db from '$lib/db';
import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const userName = data.get('userName');
		const password = data.get('password') as unknown as string;

		// TODO: Change the error message before deploying
		// Check if user name is in the db
		const isUserValid = await db.collection('users').findOne({ userName: userName });

		if (!isUserValid) {
			return fail(400, { message: 'The user name does not exist' });
		}

		// TODO: Change the error message before deploying
		// Check that the password that is given is correct
		const isPasswordValid = await bcrypt.compare(password, isUserValid.password);
		if (!isPasswordValid) {
			return fail(400, { message: 'The password is wrong' });
		}

		const authenticatedUser = await db
			.collection('users')
			.findOneAndUpdate(
				{ email: isUserValid.email },
				{ $set: { userAuthToken: crypto.randomUUID() } },
				{ returnDocument: 'after' }
			);

		cookies.set('session', authenticatedUser?.value?.userAuthToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(302, '/stoplist');
	}
};
