<script lang="ts">
  import Ticket from '$lib/ticket/Ticket.svelte';
  import PillButton from '$lib/PillButton.svelte';
</script>

<div id="new-ticket" class="p-5">
  <PillButton href="/newticket" label="+ NEW TICKET" />
</div>
<div class=" flex flex-row items-center justify-between mx-20 my-5">
  <div class="font-roboto-condensed font-bold text-3xl">OPEN TICKETS</div>
  <div class="font-roboto-condensed font-thin text-slate-500 text-xl">
    Number of Tickets: <strong>43</strong>
  </div>
</div>
<section id="tickets" class="shadow-xl bg-slate-50">
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
</section>

<footer class="w-full text-center px-auto py-7 text-xs">
  © 2023 Berwick Insurance Group – An Integrity Company | All rights reserved. |
  888-745-2320 Garthok 2 was created by Alex Wilkins and Kirk Vangilder from
  Berwick Insurance Group Marketing - All rights reserved. Nethal the Garthok.
</footer>

<style lang="postcss">
  .font-roboto-condensed {
    font-family: 'Roboto Condensed', sans-serif;
  }
</style>
