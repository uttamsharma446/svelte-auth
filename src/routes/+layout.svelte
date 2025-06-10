<script>
  import "../app.css";
  export let data;
</script>

<nav class="bg-white border-b shadow-md">
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"
  >
    <a href="/" class="text-xl font-bold text-blue-600">PokePage</a>

    {#if !data.user}
      <div class="space-x-4">
        <a href="/login" class="text-gray-700 hover:text-blue-600">Login</a>
      </div>
    {:else}
      <div class="space-x-4">
        <a
          data-sveltekit-preload-code="off"
          data-sveltekit-preload-data="off"
          href="/logout"
          class="text-gray-700 hover:text-blue-600">Logout</a
        >
      </div>
    {/if}
  </div>
</nav>

<main class="p-4">
  <slot />
</main>
