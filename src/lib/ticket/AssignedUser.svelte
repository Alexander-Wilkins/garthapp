<script lang="ts">
  import alexAvatar from '$lib/assets/alex.png';
  import kirkAvatar from '$lib/assets/kirk.png';
  import randyAvatar from '$lib/assets/randy.png';
  import joelAvatar from '$lib/assets/joel.png';

  export let username: string;

  const getImagePath = () => {
    return username === 'kirk'
      ? kirkAvatar
      : username === 'randy'
      ? randyAvatar
      : username === 'joel'
      ? joelAvatar
      : alexAvatar;
  };
</script>

<div
  id="assigned_to"
  class="ticket-cell with-border | flex flex-row place-items-center gap-1 w-[13.25rem] whitespace-nowrap"
>
  <span class="text-xs italic">Assigned to:</span>
  <img
    id="avatar"
    class="inline-block h-10"
    src={getImagePath()}
    alt="avatar"
  />

  {#if username === 'kirk'}
    <span id="user" class="font-semibold text-sm">Kirk V.</span>
  {:else if username === 'randy'}
    <span id="user" class="font-semibold text-sm">Randy P.</span>
  {:else if username === 'joel'}
    <span id="user" class="font-semibold text-sm">Joel C.</span>
  {:else}
    <span id="user" class="font-semibold text-sm">Alex W.</span>
  {/if}
</div>

<style lang="postcss">
  :root {
    --checkboxSize: 1.125rem;
  }

  .ticket-cell {
    @apply px-5;
  }

  .with-border {
    @apply border border-solid border-black;
  }
</style>
