import { loginUser } from "$lib/models/user";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

import { goto } from "$app/navigation";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (loadEvents) => {
  const locals = loadEvents.locals;
  if (locals.user) {
    throw redirect(302, "/news");
  }
};

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data: any = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    // Verify that we have an email and a password
    if (!email || !password) {
      return fail(400, {
        error: "Missing email or password",
      });
    }

    // Create a new user
    const result = await loginUser({
      email: email,
      password: password,
    });
    if (!result) return fail(401, { error: "Invalid email or password" });
    cookies.set("AuthorizationToken", `Bearer ${result.token}`, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });
    console.log("owring");
    // Redirect to the login page
    throw redirect(302, "/");
  },
};
