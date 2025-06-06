import { checkMongoConnection } from "$lib/models/checkMongoConnection";
import type { Handle } from "@sveltejs/kit";

checkMongoConnection()

export const handle: Handle = async ({ event, resolve }) => {
  // Normal request processing
  return resolve(event);
};
