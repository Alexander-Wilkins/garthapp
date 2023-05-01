<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let intervalId: string | number | NodeJS.Timer | undefined;
  let timer = 0;
  let time = '00:00:00';
  let running = true;

  function startTimer() {
    intervalId = setInterval(() => {
      timer++;
      time = new Date(timer * 1000).toISOString().substr(11, 8);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalId);
    running = false;
  }

  function toggleTimer() {
    running = !running;
    running ? startTimer() : stopTimer();
  }

  onMount(() => {
    startTimer();
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="timer-container">
  <input
    type="text"
    value={time}
    readonly
    class="text-center border border-black bg-slate-200 w-28 font-bold h-9"
  />
  <button on:click={toggleTimer} class="bg-red-500 rounded-full p-1">
    {running ? 'Pause' : 'Play'}
  </button>
</div>

<style lang="postcss">
  .timer-container {
    display: flex;
    align-items: center;
  }

  .timer-container input {
    margin-right: 10px;
  }
</style>
