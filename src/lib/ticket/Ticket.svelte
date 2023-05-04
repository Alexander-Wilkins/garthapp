<script lang="ts">
  import { capitalizeFirstLetter } from '$lib/utils/capitalize';

  import Priority from './Priority.svelte';
  import AssignedUser from './AssignedUser.svelte';

  let statusColor = 'text-black';

  export let id: number;
  export let title: string;
  export let status: string;
  export let assigned_to: string;
  export let category: string;
  export let created_at: string;
  export let priority: string;

  const formattedDate = new Date(created_at)
    .toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    })
    .replace(/\//g, '-');
</script>

<div class="floating flex flex-col">
  <a href="/ticket/{id}" class="flex-wrapper">
    <div id="ticket_id" class="ticket-cell with-border text-center basis-24">
      <strong>{id}</strong>
    </div>
    <div
      id="ticket-title"
      class="ticket-cell relative with-border flex-row items-center flex-grow bg-lime-100 hover:bg-orange-100 font-medium justify-between truncate overflow-ellipsis w-[40rem]"
    >
      {title}
      <div
        id="status"
        class="{status === 'new'
          ? 'text-white bg-purple-500'
          : status === 'replied'
          ? 'text-white bg-blue-500'
          : status === 'submitted'
          ? `text-white bg-green-600`
          : status === 'waiting'
          ? `${statusColor} bg-yellow-200`
          : status === 'hold'
          ? `${statusColor} bg-stone-300`
          : status === 'resolved'
          ? `${statusColor} bg-lime-300`
          : statusColor} rounded-full border border-solid border-black w-[115px] ml-auto text-center absolute right-2 inline-block"
      >
        {#if status === 'resolved'}
          <i class="fa-solid fa-check" />
          {capitalizeFirstLetter(status)}
        {:else}
          {capitalizeFirstLetter(status)}
        {/if}
      </div>
    </div>
    <AssignedUser username={assigned_to} />
    <div
      id="category"
      class="ticket-cell with-border font-semibold italic w-[11rem] text-center whitespace-nowrap"
    >
      {category.toUpperCase()}
    </div>
    <div
      id="created_at"
      class="ticket-cell with-border font-roboto-condensed font-medium italic text-sm justify-center items-center flex flex-row"
    >
      <span class="text-xs">DATE CREATED: &nbsp;</span>
      {formattedDate}
    </div>
    <div
      id="priority"
      class="ticket-cell with-border bg-slate-200 basis-[149px] text-center"
    >
      <Priority {priority} />
    </div>
  </a>
</div>

<style lang="postcss">
  :root {
    --checkboxSize: 1.125rem;
  }

  .ticket-cell {
    @apply p-2 px-5;
  }

  :global(.with-border) {
    @apply border border-solid border-black;
  }

  .flex-wrapper {
    @apply flex flex-row justify-center;
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

  @media (max-width: 1581px) {
    #created_at {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    #category {
      display: none;
    }
  }
  @media (max-width: 1044px) {
    #priority {
      display: none;
    }
  }
  @media (max-width: 900px) {
    #ticket_id {
      @apply min-w-[96px] px-2;
    }
  }
  @media (max-width: 725px) {
    #status {
      @apply w-[70px] text-xs;
    }
    #ticket-title {
      @apply pr-20 text-sm;
    }
  }
</style>
