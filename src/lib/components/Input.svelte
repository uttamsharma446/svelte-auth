<script lang="ts">
  export let id: string = "";
  export let label: string = "";
  export let type: string = "text";
  export let placeholder: string = "Type text...";
  export let value: string = "";
  export let error: string = "";
  export let required: boolean = false;
  export let disabled: boolean = false;
  export let className: string = "";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    dispatch("input", target.value);
  };
</script>

<input
  {type}
  {id}
  {placeholder}
  bind:value
  {required}
  {disabled}
  onchange={handleChange}
  class={` border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 
      ${error ? "border-red-500" : "border-gray-300"} 
      ${disabled ? "bg-gray-100 cursor-not-allowed" : ""} 
      ${className}`}
/>
