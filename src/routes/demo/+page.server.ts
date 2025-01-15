import db from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Get all stops but exclude the signers and notes fields
	const response = await db
		.collection('notes')
		.find({})
		.project({ signers: 0, notes: 0 })
		.toArray();
	const allStops = JSON.stringify(response);

	return {
		stops: allStops
	};
};
