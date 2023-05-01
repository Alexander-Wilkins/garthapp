<script lang="ts">
  import { toast } from '@zerodevx/svelte-toast';
  import { page } from '$app/stores';
  import ArrowButton from '$lib/ArrowButton.svelte';
  import Timer from '$lib/ticket/Timer.svelte';
  import { capitalizeAllLetters } from '$lib/utils/capitalize';

  export let data: { title: string };
  const ticketId = $page.params.ticketId;

  function copyAgentInfo() {
    const agentInfo = document.getElementById('agent-info') as HTMLElement;
    const agentInfoText = agentInfo.innerText;
    navigator.clipboard.writeText(agentInfoText);
    copyToast();
  }

  function copyToast() {
    toast.push('Agent Info Copied!', {
      theme: {
        '--toastBarHeight': 0,
        '--toastColor': 'mintcream',
        '--toastBackground': 'rgba(72,187,120,0.9)',
        '--toastBarBackground': '#2F855A',
      },
    });
  }
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
        class="container bg-stone-100 p-5 rounded-lg border border-black"
      >
        <div id="agent-container" class="container flex flex-col">
          <button class="green-edit-button text-sm"
            ><i class="fa-solid fa-pen" /> EDIT AGENT INFO</button
          >
          <div id="agent-content" class="flex flex-row gap-4 mt-3">
            <div id="agent-block" class="font-roboto-condensed font-bold">
              <div class="mb-2">AGENT INFORMATION:</div>

              <div id="agent-info" class="leading-5">
                <span class="text-sky-400 text-lg">Tommy Tinajero</span>
                <br />Licensed Insurance Agent<br />
                646-283-5839<br />
                TommyTJ24@insurance.com <br />License #: 0L93387 <br />
                <span class="font-light italic">
                  123 W. Jefferson Rd.<br />
                  El Paso, TX 78945
                </span>
              </div>
              <button
                id="copy-button"
                class="tan-sm-button text-sm"
                on:click={copyAgentInfo}
                ><i class="fa-solid fa-copy" /> Copy Info</button
              >
              <button on:click={copyToast}>SHOW TOAST</button>
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
          <div
            id="agent-content"
            class="flex flex-row gap-3 mt-3 bg-white items-center italic text-sm border border-slate-200 px-2 py-1 w-full justify-center"
          >
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
