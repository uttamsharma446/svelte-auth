// See https://svelte.dev/docs/kit/types#app.d.ts

import type { SessionUser } from "$lib/types/user";

// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      user: SessionUser | null;
    }
  }
}

export {};
