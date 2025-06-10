import clientPromise from "$lib/server/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
export async function getAllUsers() {
  const client = await clientPromise;
  const db = client.db(MONGODB_NAME);
  return await db.collection("users").find({}).toArray();
}
export const MONGODB_NAME = "svelte-learning";
export const JWT_SECRET = "scret_key";
export const JWT_EXPIRY = "7d";
export async function getUserByEmail(email: string) {
  const client = await clientPromise;
  const db = client.db(MONGODB_NAME);
  return await db.collection("users").findOne({ email });
}

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const client = await clientPromise;
  console.log(MONGODB_NAME);
  const db = client.db(MONGODB_NAME);
  // Hash the password before storing
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);
  return await db.collection("users").insertOne({
    name: data.name,
    email: data.email,
    password: hashedPassword,
  });
}

export async function loginUser(params: { email: string; password: string }) {
  const { email, password } = params;
  const client = await clientPromise;
  const db = client.db(MONGODB_NAME);

  const user = await db.collection("users").findOne({ email });
  if (!user) return null;

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) return null;

  const payload = {
    id: user._id,
    email: user.email,
    name: user.name,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });

  return {
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    token,
  };
}

export async function getUserById(id: string) {
  const client = await clientPromise;
  const db = client.db(MONGODB_NAME);

  try {
    const objectId = new ObjectId(id);
    return await db.collection("users").findOne({ _id: objectId });
  } catch (error) {
    return null;
  }
}
