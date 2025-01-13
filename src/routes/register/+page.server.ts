import bcrypt from 'bcryptjs';
import db from '$lib/db';

import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	register: async ({ request }) => {
		// Get user name and password
		const formData = await request.formData();
		const user = formData.get('userName') as unknown as string;
		const password = formData.get('password') as unknown as string;
		const confirmPassword = formData.get('confirmPassword') as unknown as string;

		// Check if user name already exists
		const userExists = await db.collection('users').findOne({ userName: user });
		if (userExists) {
			return fail(400, {
				message: 'The username you entered is not available. Please try a different one'
			});
		}

		// Check if password and confirmPassword are the same
		if (password !== confirmPassword) {
			return fail(400, { message: 'Passwords must be the same' });
		}

		// Hash the user's password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Add user to database
		const createUser = await db.collection('users').insertOne({
			userName: user,
			password: hashedPassword,
			role: 'user'
		});

		if (!createUser) {
			return fail(400, { message: 'User not created' });
		}

		// Redirect to stops route after successful register
		throw redirect(302, '/stops');
	}
};
