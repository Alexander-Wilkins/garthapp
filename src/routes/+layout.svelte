<script>
  import Navbar from '$lib/Navbar.svelte';
  import '../app.css';
</script>

<div class="mx-20">
  <Navbar />
  <slot />
</div>

<style lang="postcss">
  :global(.font-roboto-condensed) {
    font-family: 'Roboto Condensed', sans-serif;
  }
</style>
