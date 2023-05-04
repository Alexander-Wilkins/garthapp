<script lang="ts">
  export let href: string;
</script>

<a {href}
  ><button id="back-arrow" class="pill-button">
    <i class="fa-solid fa-arrow-left text-3xl" />
  </button></a
>

<style lang="postcss">
  #back-arrow {
    width: 4rem;
    padding-left: 1.125rem;
  }
</style>
