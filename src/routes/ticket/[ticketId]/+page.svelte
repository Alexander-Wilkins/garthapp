<script lang="ts">
  import { page } from '$app/stores';
  import ArrowButton from '$lib/ArrowButton.svelte';

  export let data: { title: string };
  const ticketId = $page.params.ticketId;
</script>

<ArrowButton href="/" />
<h1 class="font-roboto-condensed text-xl font-extrabold">
  #{ticketId}
  {data.title}
</h1>
