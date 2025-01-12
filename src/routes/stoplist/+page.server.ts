import db from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const response = await db.collection('notes').find({}).toArray();
	const allStops = JSON.stringify(response);

	return {
		stops: allStops
	};
};
