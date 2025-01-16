import db from '$lib/db';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	addNote: async ({ request }) => {
		// Get all of the data from the form
		const formData = await request.formData();
		const custName = formData.get('custName') as string;
		const address = formData.get('address') as string;
		const suite = formData.get('suite') as string;
		const city = formData.get('city') as string;
		const deliveryLocation = formData.get('deliveryLocation') as string;
		const notes = formData.get('notes') as string;
		const signers = formData.get('signers') as unknown as Array<string>;

		// Add the stop
		const addStop = await db.collection('notes').insertOne({
			custName: custName,
			address: address,
			suite: suite,
			city: city,
			deliveryLocation: deliveryLocation,
			notes: notes,
			signers: signers
		});

		if (!addStop.acknowledged) {
			return fail(400, { message: 'Stop was not added' });
		}

		throw redirect(302, '/stoplist');
	}
};
