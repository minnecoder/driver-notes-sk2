import db from '$lib/db';
import { ObjectId } from 'mongodb';
import type { PageServerLoad } from './$types';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const { stopid } = event.params;
	const response = await db.collection('notes').findOne({ _id: new ObjectId(stopid) });
	const stop = JSON.stringify(response);

	return {
		stop
	};
};

export const actions: Actions = {
	updateNote: async ({ request }) => {
		// Get all of the data from the form
		const formData = await request.formData();
		let stopId = formData.get('stopId') as string;
		const custName = formData.get('custName') as string;
		const address = formData.get('address') as string;
		const suite = formData.get('suite') as string;
		const city = formData.get('city') as string;
		const deliveryLocation = formData.get('deliveryLocation') as string;
		const notes = formData.get('notes') as string;
		const signers = formData.get('signers') as unknown as Array<string>;

		// Remove double quotes from string
		stopId = stopId.replace(/"/g, '');

		// Update the stop
		const updateStop = await db.collection('notes').updateOne(
			{ _id: new ObjectId(stopId) },
			{
				$set: {
					custName: custName,
					address: address,
					suite: suite,
					city: city,
					deliveryLocation: deliveryLocation,
					notes: notes,
					signers: signers
				}
			}
		);

		if (updateStop.modifiedCount !== 1) {
			return fail(400, { message: 'Stop was not updated' });
		}

		throw redirect(302, '/stoplist');
	}
};
