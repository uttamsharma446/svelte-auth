import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ cookies }) => {
  cookies.set("AuthorizationToken", ``, {
    path: "/",
    maxAge: 0,
  });
  throw redirect(302, "/login");
  //
};
