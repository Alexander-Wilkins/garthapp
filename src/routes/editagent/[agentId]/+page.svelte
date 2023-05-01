<script lang="ts">
  import { page } from '$app/stores';

  import ArrowButton from '$lib/ArrowButton.svelte';

  const agentId = $page.params.agentId;

  console.log(agentId);
</script>

<ArrowButton href="/ticket/{agentId}" />

would you like to freaking edit the agent?!?!? RELALYLYL?!?!?
