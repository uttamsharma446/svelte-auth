<script>
  export let form;
</script>

<form
  method="post"
  class="max-w-sm mx-auto space-y-4 mt-10 p-6 border rounded shadow"
>
  <h2 class="text-2xl font-bold">Login</h2>

  <div>
    <label for="email" class="block font-medium">Email</label>
    <input
      id="email"
      type="email"
      class="border border-gray-300 p-2 rounded w-full"
      required
      name="email"
    />
  </div>

  <div>
    <label for="password" class="block font-medium">Password</label>
    <input
      id="password"
      type="password"
      class="border border-gray-300 p-2 rounded w-full"
      required
      name="password"
    />
  </div>

  <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded w-full">
    Login
  </button>
  <div class="text-center pt-0.5">
    Don't have an account? <a class="text-blue-500 underline" href="/signup"
      >Sign up</a
    >
  </div>
</form>
