<script lang="ts">
  import Icon from "@iconify/svelte";
  import Chip from "./Chip.svelte";
  export let title: string;
  export let description: string = "";
  export let status: "in_progress" | "todo" | "complete" = "todo";
</script>

<div class="flex mt-4 flex-col gap-1 border-b border-gray-200 p-1 pb-3">
  <div class="flex justify-between items-center">
    <p>{title}</p>
    <Chip label={status} />
    <div class="flex gap-1">
      <Icon
        icon="mdi:edit"
        style="color: #00809D;font-size:26px;cursor:pointer"
      />
      <Icon
        icon="mdi:delete"
        style="color: #FF4F0F;font-size:26px;cursor:pointer"
      />
    </div>
  </div>
  {#if description}
    <div>{description}</div>
  {/if}
</div>
