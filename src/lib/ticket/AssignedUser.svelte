<script lang="ts">
  import Status from './Status.svelte';

  import avatarTemp from '$lib/assets/avatar-temp.png';

  export let username: string = 'Alex W.';
</script>

<div
  id="assigned_to"
  class="ticket-cell with-border | flex flex-row place-items-center gap-1 w-[13.25rem] whitespace-nowrap"
>
  <span class="text-xs italic">Assigned to:</span>
  <img class="inline-block h-10" src={avatarTemp} alt="avatar" />
  <span id="user" class="font-semibold text-sm">{username}</span>
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
