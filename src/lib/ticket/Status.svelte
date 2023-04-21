<script lang="ts">
  import { capitalizeFirstLetter } from '$lib/utils/capitalize';
  let statusColor = 'text-black';

  export let statusLabel: string = 'new';
</script>

<div
  id="status"
  class="{statusLabel === 'new'
    ? 'text-white bg-purple-500'
    : statusLabel === 'replied'
    ? 'text-white bg-blue-500'
    : statusLabel === 'submitted'
    ? `${statusColor} bg-green-500`
    : statusLabel === 'waiting'
    ? `${statusColor} bg-yellow-200`
    : statusLabel === 'hold'
    ? `${statusColor} bg-stone-300`
    : statusLabel === 'resolved'
    ? `${statusColor} bg-lime-300`
    : statusColor} rounded-full border border-solid border-black w-[115px] ml-10 text-center"
>
  {#if statusLabel === 'resolved'}
    <i class="fa-solid fa-check" />
    {capitalizeFirstLetter(statusLabel)}
  {:else}
    {capitalizeFirstLetter(statusLabel)}
  {/if}
</div>
