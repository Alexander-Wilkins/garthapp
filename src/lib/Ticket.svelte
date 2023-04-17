<script lang="ts">
  import PillButton from '$lib/PillButton.svelte';
</script>

<div
  class="floating | grid grid-flow-col auto-cols-max justify-items-center items-center"
>
  <div id="select" class="ticket-cell with-border |">
    <input type="checkbox" class="select-checkbox" />
  </div>
  <div id="ticket_id" class="ticket-cell with-border | text-center">
    <strong>12345</strong>
  </div>
  <div
    id="ticket-title"
    class="ticket-cell with-border | flex flex-row items-center h-[2.6rem] content-between"
  >
    <a href="/" class="w-[43.125em]">
      Research Project - Video Templates for Agents
    </a>
    <div
      id="status"
      class="bg-violet-600 text-slate-50 rounded-full border border-solid border-black py-0 px-6 ml-10"
    >
      **New**
    </div>
  </div>
  <div id="assigned_to" class="ticket-cell with-border |">
    Assigned to: Alex W.
  </div>
  <div id="category" class="ticket-cell with-border | font-semibold italic">
    AGENT REQUEST
  </div>
  <div
    id="created_at"
    class="ticket-cell with-border | font-semibold italic text-sm h-[2.6rem] justify-center items-center flex flex-row"
  >
    DATE CREATED: 4-24-23
  </div>
  <div id="priority" class="ticket-cell with-border | bg-sky-300">
    <span
      class="font-bold text-white bg-sky-500 border border-solid border-black rounded-full p-1 px-5"
      >MEDIUM</span
    >
  </div>
</div>

<style lang="postcss">
  :root {
    --checkboxSize: 1.125rem;
  }

  .font-roboto-condensed {
    font-family: 'Roboto Condensed', sans-serif;
  }

  input.select-checkbox {
    position: relative;
    top: 3px;
    width: var(--checkboxSize);
    height: var(--checkboxSize);
  }

  .ticket-cell {
    @apply p-2 px-5;
  }

  .with-border {
    @apply border border-solid border-black;
  }

  .floating {
    @apply hover:bg-slate-200 hover:shadow-xl hover:transition-shadow;
  }
  .floating:hover {
    position: relative;
    bottom: 1px;
  }

  .floating:active {
    position: relative;
    bottom: 0px;
    @apply ring-4;
  }
</style>
