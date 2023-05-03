<script>
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import Navbar from '$lib/Navbar.svelte';
  import '../app.css';
  import { fly } from 'svelte/transition';

  export let data;
</script>

<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
<div id="body-container" class="mx-20">
  <Navbar />
  {#key data.url}
    <div
      in:fly={{ y: 200, duration: 300, delay: 300 }}
      out:fly={{ x: 200, duration: 300 }}
    >
      <slot />
    </div>
  {/key}
</div>

<style lang="postcss">
  :global(.font-roboto-condensed) {
    font-family: 'Roboto Condensed', sans-serif;
  }
  :root {
    --toastContainerTop: auto;
    --toastContainerRight: auto;
    --toastContainerBottom: 8rem;
    --toastContainerLeft: calc(50vw - 8rem);
  }

  @media (max-width: 725px) {
    #body-container {
      @apply mx-6;
    }
  }
</style>
