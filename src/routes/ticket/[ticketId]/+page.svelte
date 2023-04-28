<script lang="ts">
  import { page } from '$app/stores';
  import ArrowButton from '$lib/ArrowButton.svelte';
  import { capitalizeAllLetters } from '$lib/utils/capitalize';

  export let data: { title: string };
  const ticketId = $page.params.ticketId;
</script>

<section
  id="grey-bg"
  class="container mx-auto bg-neutral-200 rounded-lg border border-black px-6"
>
  <div id="ticket-title" class="container py-5">
    <div id="back-wrapper" class="absolute left-[9rem]">
      <ArrowButton href="/" />
    </div>
    <span class="font-roboto-condensed text-2xl font-extrabold">
      #{ticketId}
    </span>
    <span class="text-2xl ml-0.5">{capitalizeAllLetters(data.title)}</span>
  </div>
  <div id="inner-container">
    <div id="left-info-request-replies" class="container">
      <section
        id="top-agent-info-section"
        class="container bg-white p-5 rounded-lg border border-black"
      >
        <button class="green-edit-button text-sm"
          ><i class="fa-solid fa-pen" /> EDIT AGENT INFO</button
        >
        Agent Information: Templates: File Attachments:
      </section>
    </div>
  </div>
</section>
