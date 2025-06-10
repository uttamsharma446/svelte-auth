import { createUser } from "$lib/models/user";
import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
export const load: PageServerLoad = async ({ locals }) => {
  const user = locals.user;
  if (user) {
    throw redirect(302, "/news");
  }
};

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data: any = await request.formData();
    const email = data.get("email");
    const name = data.get("name");
    const password = data.get("password");
    // Verify that we have an email and a password
    if (!email || !password || !name) {
      return fail(400, {
        error: "Missing email or password",
      });
    }

    // Create a new user
    const error = await createUser({
      email: email,
      name: name,
      password: password,
    });

    // If there was an error, return an invalid response
    if (!error) {
      return fail(500, {
        error,
      });
    }

    // Redirect to the login page
    throw redirect(302, "/login");
  },
};
