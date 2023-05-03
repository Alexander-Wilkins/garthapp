<script lang="ts">
  import type { PageData } from './$types';

  import Ticket from '$lib/ticket/Ticket.svelte';
  import PillButton from '$lib/PillButton.svelte';

  export let data: PageData;
  let { tickets } = data;
  $: ({ tickets } = data);
</script>

<div id="new-ticket" class="p-5">
  <PillButton href="/newticket" label="+ NEW TICKET" />
</div>
<div
  id="open-ticket-container"
  class="flex flex-row items-center justify-between mx-[4%] my-5"
>
  <div id="open-tickets" class="font-roboto-condensed font-bold text-3xl">
    OPEN TICKETS
  </div>
  <div
    id="number-of-tickets"
    class="font-roboto-condensed font-thin text-slate-500 text-xl"
  >
    Number of Tickets: <strong>{tickets.length}</strong>
  </div>
</div>
<section id="tickets" class="shadow-md bg-slate-50 mx-auto max-w-[1570px]">
  {#each tickets as ticket}
    <Ticket {...ticket} />
  {/each}
</section>

<footer class="w-full text-center px-auto py-7 text-xs">
  © 2023 Berwick Insurance Group – An Integrity Company | All rights reserved. |
  888-745-2320 Garthok 2 was created by Alex Wilkins and Kirk Vangilder from
  Berwick Insurance Group Marketing - All rights reserved. Nethal the Garthok.
</footer>

<style lang="postcss">
  @media (max-width: 582px) {
    #open-ticket-container {
      @apply flex-col place-content-center;
    }
  }
</style>
