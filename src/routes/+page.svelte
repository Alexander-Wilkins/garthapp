<script lang="ts">
  import type { PageData } from "./$types";
  import Ticket from "$lib/ticket/Ticket.svelte";
  import PillButton from "$lib/PillButton.svelte";

  export let data: PageData;
  let { tickets } = data;
  $: ({ tickets } = data);
</script>

<div id="new-ticket" class="p-5">
  <PillButton href="/newticket" label="+ NEW TICKET" />
</div>
<div
  id="open-ticket-container"
  class="mx-[4%] my-5 flex flex-row items-center justify-between"
>
  <div id="open-tickets" class="font-roboto-condensed text-3xl font-bold">
    OPEN TICKETS
  </div>
  <div
    id="number-of-tickets"
    class="font-roboto-condensed text-xl font-thin text-slate-500"
  >
    Number of Tickets: <strong>{tickets.length}</strong>
  </div>
</div>
<section id="tickets" class="mx-auto max-w-[1570px] bg-slate-50 shadow-md">
  {#each tickets as ticket}
    <Ticket {...ticket} />
  {/each}
</section>

<section>
  <div>dog</div>
</section>

<style lang="postcss">
  @media (max-width: 582px) {
    #open-ticket-container {
      @apply flex-col place-content-center text-slate-600;
    }
  }
</style>
