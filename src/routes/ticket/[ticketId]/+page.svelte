<script lang="ts">
  import { toast } from '@zerodevx/svelte-toast';
  import { page } from '$app/stores';
  import { capitalizeAllLetters } from '$lib/utils/capitalize';

  import ArrowButton from '$lib/ArrowButton.svelte';
  import Timer from '$lib/ticket/Timer.svelte';

  export let data: { title: string };
  const ticketId = $page.params.ticketId;
  const agentId = ticketId;

  // --------functions---------
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
  function downloadTemplateToast() {
    toast.push('Downloaded Templates!', {
      theme: {
        '--toastBarHeight': 0,
        '--toastColor': 'mintcream',
        '--toastBackground': 'rgba(72,187,120,0.9)',
        '--toastBarBackground': '#2F855A',
      },
    });
  }
  function downloadAttchmentToast() {
    toast.push('Downloaded Attchments!', {
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
          <a href="/editagent/{agentId}">
            <button class="green-edit-button text-sm"
              ><i class="fa-solid fa-pen" /> EDIT AGENT INFO</button
            >
          </a>
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
                class="tan-sm-button text-sm font-sans"
                on:click={copyAgentInfo}
                ><i class="fa-solid fa-copy" /> Copy Agent Info</button
              >
            </div>
            <div class="vl" />
            <div
              id="templates"
              class="font-roboto-condensed font-bold flex flex-col justify-between h-[226px]"
            >
              <div id="templates-list" class="flex flex-col">
                <div class="mb-2">TEMPLATES:</div>
                <span class="underline text-sky-500"
                  ><i class="fa-solid fa-download" />
                  <a href="#">MWC1-F</a></span
                >
                <span class="underline text-sky-500"
                  ><i class="fa-solid fa-download" />
                  <a href="#">GEN_LEGU1-F</a></span
                >
                <span class="underline text-sky-500"
                  ><i class="fa-solid fa-download" />
                  <a href="#">MWC4-F</a></span
                >
              </div>
              <button
                id="copy-button"
                class="tan-sm-button text-sm font-sans"
                on:click={downloadTemplateToast}
                ><i class="fa-solid fa-download" /> All Templates</button
              >
            </div>
            <div class="vl" />
            <div
              id="templates"
              class="font-roboto-condensed font-bold flex flex-col justify-between h-[226px]"
            >
              <div id="file-list" class="flex flex-col">
                <div
                  id="file-attachments"
                  class="font-roboto-condensed font-bold"
                >
                  FILE ATTACHMENTS:
                </div>
                <span class="underline text-sky-500"
                  ><i class="fa-solid fa-download" />
                  <a href="#">profile-pic.png</a></span
                >
                <span class="underline text-sky-500"
                  ><i class="fa-solid fa-download" />
                  <a href="#">vanessa-ad.docx</a></span
                >
              </div>
              <button
                id="copy-button"
                class="tan-sm-button text-sm font-sans"
                on:click={downloadAttchmentToast}
                ><i class="fa-solid fa-download" /> All Attachments</button
              >
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
