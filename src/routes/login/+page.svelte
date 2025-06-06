<script>
  let email = "";
  let password = "";
  let error = "";
  let success = "";

  async function handleLogin(event) {
    event.preventDefault();

    // Replace this with your actual API or server call
    if (email === "admin@example.com" && password === "password") {
      success = "Login successful!";
      error = "";
    } else {
      error = "Invalid email or password.";
      success = "";
    }
  }
</script>

<form
  on:submit={handleLogin}
  class="max-w-sm mx-auto space-y-4 mt-10 p-6 border rounded shadow"
>
  <h2 class="text-2xl font-bold">Login</h2>

  <div>
    <label for="email" class="block font-medium">Email</label>
    <input
      id="email"
      type="email"
      bind:value={email}
      class="border border-gray-300 p-2 rounded w-full"
      required
    />
  </div>

  <div>
    <label for="password" class="block font-medium">Password</label>
    <input
      id="password"
      type="password"
      bind:value={password}
      class="border border-gray-300 p-2 rounded w-full"
      required
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

  {#if error}
    <p class="text-red-500 mt-2">{error}</p>
  {/if}

  {#if success}
    <p class="text-green-600 mt-2">{success}</p>
  {/if}
</form>
