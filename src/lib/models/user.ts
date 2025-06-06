import clientPromise from "$lib/server/mongodb";

export async function getAllUsers() {
  const client = await clientPromise;
  const db = client.db("test");
  return await db.collection("users").find({}).toArray();
}

export async function getUserByEmail(email: string) {
  const client = await clientPromise;
  const db = client.db("test");
  return await db.collection("users").findOne({ email });
}

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const client = await clientPromise;
  const db = client.db("test");
  return await db.collection("users").insertOne(data);
}
