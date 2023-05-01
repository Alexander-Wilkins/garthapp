<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let intervalId: string | number | NodeJS.Timer | undefined;
  let timer = 0;
  let time = '00:00:00';
  let running = true;
  let playIcon = `<i class="fa-solid fa-play"></i>`;
  let pauseIcon = `<i class="fa-solid fa-pause"></i>`;

  function startTimer() {
    intervalId = setInterval(() => {
      timer++;
      time = new Date(timer * 1000).toISOString().slice(11, 19);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalId);
    running = false;
  }

  function toggleTimer() {
    running = !running;
    running ? startTimer() : stopTimer();
    console.log(`Current time worked: ${time}`);
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
    class="text-center border border-black w-28 font-bold h-9 {running
      ? 'bg-slate-20'
      : 'bg-red-200 text-red-800'}"
  />
  <button on:click={toggleTimer} class="pauseplay-button">
    <span class="">{@html running ? pauseIcon : playIcon}</span>
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

  .pauseplay-button {
    @apply h-[30px] w-[30px] rounded-full border border-black bg-white hover:bg-slate-300;
  }
</style>
