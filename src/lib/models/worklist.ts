import clientPromise from "$lib/server/mongodb";
import { MONGODB_NAME } from "./user";

interface Worklist {
  _id?: string;
  name: string;
}

const createWorklist = async (params: Worklist) => {
  const client = await clientPromise;
  const db = client.db(MONGODB_NAME);
  return;
};
