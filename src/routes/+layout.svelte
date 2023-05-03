<script>
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import Navbar from '$lib/Navbar.svelte';
  import '../app.css';
</script>

<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
<div id="body-container" class="mx-20">
  <Navbar />
  <slot />
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
