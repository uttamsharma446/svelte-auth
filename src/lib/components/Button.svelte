<script lang="ts">
  export let type: "button" | "submit" | "reset" = "button";
  export let disabled: boolean = false;
  export let variant: "primary" | "secondary" | "danger" = "primary";
  export let size: "sm" | "md" | "lg" = "md";
  export let className: string = "";
</script>

<button
  {type}
  {disabled}
  class={`rounded px-3 py-2 font-semibold focus:outline-none cursor-pointer
    ${variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : ""}
    ${variant === "secondary" ? "bg-gray-300 text-black hover:bg-gray-400" : ""}
    ${variant === "danger" ? "bg-red-600 text-white hover:bg-red-700" : ""}
    ${size === "sm" ? "text-sm" : size === "lg" ? "text-lg py-3 px-6" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `}
>
  <slot />
</button>
