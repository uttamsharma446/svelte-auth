import { json } from "@sveltejs/kit";

export const GET = (requestEvent: any) => {
  return json({
    message: "Hello world",
  });
};
