export type Stop = {
	_id: string;
	signers: Array<string>;
	custName: string;
	address: string;
	suite?: string;
	city: string;
	deliveryLocation: string;
	notes: string;
};
