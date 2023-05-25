<script lang="ts">
  import Navbar from "$lib/Navbar.svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import "../app.css";

  export let data;
  let showBackToTop: boolean;

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  onMount(() => {
    const backToTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
      if (backToTop && window.scrollY > window.innerHeight / 2) {
        showBackToTop = true;
        backToTop.classList.add("show");
      } else {
        showBackToTop = false;
        if (backToTop) {
          backToTop.classList.remove("show");
        }
      }
    });
  });
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
<button on:click={scrollTop} class="back-to-top rocket-button text-4xl"
  ><i class="fa-brands fa-space-awesome" /></button
>

<footer id="bottom-of-page" class="px-auto w-full py-7 text-center text-xs">
  © 2023 Berwick Insurance Group – An Integrity Company | All rights reserved. |
  888-745-2320 Garthok 2 was created by Alex Wilkins and Kirk Vangilder from
  Berwick Insurance Group Marketing - All rights reserved. Nethal the Garthok.
</footer>

<style lang="postcss">
  :global(.font-roboto-condensed) {
    font-family: "Roboto Condensed", sans-serif;
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
