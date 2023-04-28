<script>
  import { onMount, onDestroy } from 'svelte';

  /**
   * @type {string | number | NodeJS.Timer | undefined}
   */
  let intervalId;
  let timer = 0;
  let time = '00:00:00';
  let running = false;

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
  <input type="text" value={time} readonly />
  <button on:click={toggleTimer} />
</div>

<style>
  .timer-container {
    display: flex;
    align-items: center;
  }

  .timer-container input {
    margin-right: 10px;
  }
</style>
