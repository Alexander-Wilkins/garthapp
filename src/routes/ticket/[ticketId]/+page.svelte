<script lang="ts">
  import { page } from '$app/stores';
  import ArrowButton from '$lib/ArrowButton.svelte';
  import Timer from '$lib/ticket/Timer.svelte';
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
        id="top-agent-section"
        class="container bg-white p-5 rounded-lg border border-black"
      >
        <div id="agent-container" class="container flex flex-col">
          <button class="green-edit-button text-sm"
            ><i class="fa-solid fa-pen" /> EDIT AGENT INFO</button
          >
          <div id="agent-content" class="flex flex-row gap-4 mt-3">
            <div id="info" class="font-roboto-condensed font-bold">
              <div class="mb-2">AGENT INFORMATION:</div>

              <div class="leading-5">
                <span class="text-sky-400 text-lg">Tommy Tinajero</span>
                <br />Licensed Insurance Agent<br />
                646-283-5839<br />
                TommyTJ24@insurance.com <br />License #: 0L93387 <br />
                <div class="font-light italic">
                  123 W. Jefferson Rd.<br />
                  El Paso, TX 78945
                </div>
              </div>
            </div>
            <div class="vl" />
            <div id="template-list" class="font-roboto-condensed font-bold">
              TEMPLATES:
            </div>
            <div class="vl" />
            <div id="file-attachments" class="font-roboto-condensed font-bold">
              FILE ATTACHMENTS:
            </div>
          </div>
          <div id="agent-content" class="">
            Time Worked:
            <Timer />
          </div>
        </div>
      </section>
    </div>
  </div>
</section>

<style>
  .vl {
    border-left: 1px solid black;
    height: 152px;
  }
</style>
