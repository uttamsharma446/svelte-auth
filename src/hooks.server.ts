import { checkMongoConnection } from "$lib/models/checkMongoConnection";
import { getUserById, JWT_SECRET } from "$lib/models/user";
import type { Handle } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
checkMongoConnection();

export const handle: Handle = async ({ event, resolve }) => {
  const { headers } = event.request;

  const AuthorizationToken = event.cookies.get("AuthorizationToken");
  if (!AuthorizationToken) {
    event.locals.user = null;
  } else {
    const withoutBearer = AuthorizationToken.split(" ")[1];
    const claims: any = jwt.verify(withoutBearer, JWT_SECRET);
    if (claims) {
      const userId = claims.id;
      const user = await getUserById(userId);
      if (!user) throw new Error("User not found");
      event.locals.user = {
        email: user.email,
        id: String(user._id),
      };
    }
  }

  const response = await resolve(event);
  return response;
};
