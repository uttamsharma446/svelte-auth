import clientPromise from "$lib/server/mongodb";

export async function checkMongoConnection(): Promise<boolean> {
  try {
    const client = await clientPromise;
    await client.db().command({ ping: 1 });
    1;
    console.log("✅ MongoDB connection is healthy");
    return true;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    return false;
  }
}
