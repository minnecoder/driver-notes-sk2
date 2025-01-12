import { MongoClient } from 'mongodb';
import { MONGODB_DB, MONGODB_URI } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);

await client.connect();

export default client.db(MONGODB_DB);
