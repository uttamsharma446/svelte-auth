import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (loadEvents) => {
  const locals = loadEvents.locals;
  if (!locals.user) {
    throw redirect(302, "/login");
  }
};
