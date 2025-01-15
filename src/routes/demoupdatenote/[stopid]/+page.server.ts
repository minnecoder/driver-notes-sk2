import db from '$lib/db';
import { ObjectId } from 'mongodb';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const { stopid } = event.params;
	const response = await db.collection('notes').findOne({ _id: new ObjectId(stopid) });

	const stop = JSON.stringify(response);

	return {
		stop
	};
};
