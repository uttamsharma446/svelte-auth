<script>
  import "../app.css";
</script>

<nav class="bg-white border-b shadow-md">
  <div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16"
  >
    <div class="text-xl font-bold text-blue-600">PokePage</div>

    <div class="space-x-4">
      <a href="/login" class="text-gray-700 hover:text-blue-600">Login</a>
    </div>
  </div>
</nav>

<main class="p-4">
  <slot />
</main>
