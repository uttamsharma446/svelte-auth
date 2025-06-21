<script>
  import Button from "$lib/components/Button.svelte";
  import Chip from "$lib/components/Chip.svelte";
  import Input from "$lib/components/Input.svelte";
  import TodoItem from "$lib/components/TodoItem.svelte";
  import TodoCard from "$lib/components/TodoItem.svelte";
  import Icon from "@iconify/svelte";
  let todoValue = "";
  let trashold = 150;
</script>

<div class="flex w-full h-screen justify-center">
  <div class="relative w-[800px] flex flex-col items-center">
    <div
      class="absolute left-0 top-0 w-full bg-[#2A4759]"
      style="height:{trashold}px"
    ></div>
    <div
      style="top:{trashold}px;height:calc(100% - {trashold}px)"
      class="absolute left-0 bg-[#F1E7E7] w-full"
    ></div>
    <div
      style=" "
      class="flex w-full flex-col items-center gap-2 z-10 px-[10%]"
    >
      <h1 class="text-2xl text-center font-bold mt-2 text-[#E67514]">
        Work Board
      </h1>
      <div class="bg-white w-full rounded-[10px] py-10 mt-6">
        <form class="flex flex-col items-center gap-5">
          <Input
            bind:value={todoValue}
            className="border-0 border-b-2 w-[80%] focus:outline-none focus:ring-2 focus:ring-blue-500 "
            type="text"
            placeholder="What would you like to-do."
          ></Input>
          <Button className="ml-1 w-[200px]">Add</Button>
        </form>
      </div>
      <div class="bg-white w-full rounded-[10px] p-6 mt-3">
        <h3 class="text-[1rem]">To-DO List</h3>
        <div class="flex justify-between my-3">
          <div>
            <p class="text-gray-700">Item</p>
          </div>
          <div>
            <p class="text-gray-700">Status</p>
          </div>
          <div>
            <p class="text-gray-700">Action</p>
          </div>
        </div>
        <TodoItem title="Make this work" status="todo" />
        <TodoItem title="Make this work" status="todo" />
        <TodoItem title="Make this work" status="todo" />
      </div>
    </div>
  </div>
</div>
