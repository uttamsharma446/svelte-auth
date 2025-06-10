<script>
  import { enhance } from "$app/forms";
  export let form;
</script>

<form
  method="POST"
  class="max-w-sm mx-auto space-y-4 mt-10 p-6 border rounded shadow"
  use:enhance
>
  {#if form?.error}
    <div class="notice error">
      {form.error}
    </div>
  {/if}
  <h2 class="text-2xl font-bold">Signup</h2>

  <div>
    <label for="name" class="block font-medium">Name</label>
    <input
      id="name"
      type="text"
      name="name"
      class="border border-gray-300 p-2 rounded w-full"
      required
    />
  </div>
  <div>
    <label for="email" class="block font-medium">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      class="border border-gray-300 p-2 rounded w-full"
      required
    />
  </div>

  <div>
    <label for="password" class="block font-medium">Password</label>
    <input
      id="password"
      type="password"
      name="password"
      class="border border-gray-300 p-2 rounded w-full"
      required
    />
  </div>

  <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded w-full">
    Signup
  </button>
  <div class="text-center">
    Already have an account?
    <a href="/login" class="underline text-blue-600">Login</a>
  </div>
</form>
