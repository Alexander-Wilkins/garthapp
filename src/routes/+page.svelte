<script lang="ts">
  import Ticket from '$lib/Ticket.svelte';

  import PillButton from '$lib/PillButton.svelte';
</script>

<div id="new-ticket" class="p-5">
  <PillButton href="#" label="+ NEW TICKET" />
</div>
<section id="tickets" class=" mx-auto">
  <div class="  flex flex-row items-center justify-between">
    <div class="font-roboto-condensed font-bold text-xl">OPEN TICKETS</div>
    <div class="font-roboto-condensed font-thin text-slate-500">
      Number of Tickets: <strong>43</strong>
    </div>
  </div>
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
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
  <Ticket />
</section>

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
</style>
