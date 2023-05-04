<script lang="ts">
  //modules & packages
  import {
    copyToast,
    downloadTemplateToast,
    downloadAttchmentToast,
  } from '$lib/utils/toast';
  import { page } from '$app/stores';
  import { capitalizeAllLetters } from '$lib/utils/capitalize';

  // components
  import ArrowButton from '$lib/ArrowButton.svelte';
  import GeneralInfo from '$lib/ticket/GeneralInfo.svelte';
  import Request from '$lib/ticket/Request.svelte';
  import Reply from '$lib/ticket/Reply.svelte';

  //variables
  export let data: { title: string };
  const ticketId = $page.params.ticketId;

  //
  function copyAgentInfo() {
    const agentInfo = document.getElementById('agent-info') as HTMLElement;
    const agentInfoText = agentInfo.innerText;
    navigator.clipboard.writeText(agentInfoText);
    copyToast();
  }
</script>

<section
  id="grey-bg"
  class="container mx-auto bg-neutral-200 rounded-lg border border-black px-6 w-[1240px]"
>
  <div id="ticket-title" class="container py-5">
    <div id="back-wrapper" class="inline-block mr-2">
      <ArrowButton href="/" />
    </div>
    <span class="font-roboto-condensed text-4xl font-extrabold">
      #{ticketId}
    </span>
    <span class="text-3xl ml-1.5">{capitalizeAllLetters(data.title)}</span>
  </div>
  <div id="inner-container" class="flex flex-row gap-3 flex-grow">
    <div
      id="left-info-request-replies"
      class="container flex flex-col gap-3 mb-10"
    >
      <section id="top-agent-section" class="ticket-section">
        <div id="agent-container" class="container flex flex-col">
          <a href="/editagent/{ticketId}" class="cursor-pointer">
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
                  <a href="/">MWC1-F</a></span
                >
                <span class="underline text-sky-500"
                  ><i class="fa-solid fa-download" />
                  <a href="/">GEN_LEGU1-F</a></span
                >
                <span class="underline text-sky-500"
                  ><i class="fa-solid fa-download" />
                  <a href="/">MWC4-F</a></span
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
                  <a href="/">profile-pic.png</a></span
                >
                <span class="underline text-sky-500"
                  ><i class="fa-solid fa-download" />
                  <a href="/">vanessa-ad.docx</a></span
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
        </div>
      </section>
      <Request />
      <Reply />
      <Reply />
    </div>

    <div id="right-general-info-history" class="">
      <GeneralInfo />
      <div id="ticket-history">
        <strong class="underline text-sky-400 block mb-2">Ticket History</strong
        >
        <ul class="text-xs leading-5 italic font-roboto-condensed">
          <li>01-03-2023 11:10:01 | ticket created by Kirk V.</li>
          <li>
            01-03-2023 11:10:24 | status changed to On Hold by Kirk Van Gilder
            (kirk)
          </li>
          <li>
            01-04-2023 13:05:25 | time worked updated to 00:30:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-05-2023 09:35:32 | time worked updated to 00:45:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-10-2023 14:00:15 | time worked updated to 08:45:00 by Alex
            Wilkins (alex)
          </li>
          <li>
            01-10-2023 14:31:24 | time worked updated to 09:00:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-12-2023 10:49:31 | time worked updated to 10:00:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-12-2023 13:47:20 | time worked updated to 10:15:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-13-2023 09:11:26 | time worked updated to 10:30:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-16-2023 09:24:31 | time worked updated to 13:30:00 by Alex
            Wilkins (alex)
          </li>
          <li>
            01-16-2023 16:54:29 | time worked updated to 14:00:00 by Alex
            Wilkins (alex)
          </li>
          <li>
            01-18-2023 15:35:38 | time worked updated to 14:00:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-19-2023 09:19:56 | time worked updated to 14:30:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-19-2023 09:24:54 | time worked updated to 14:45:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-19-2023 13:29:32 | time worked updated to 15:00:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-20-2023 09:21:03 | time worked updated to 15:30:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-24-2023 13:08:46 | time worked updated to 15:45:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-25-2023 14:35:19 | time worked updated to 16:15:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-26-2023 09:25:48 | time worked updated to 16:45:00 by Kirk Van
            Gilder (kirk)
          </li>
          <li>
            01-26-2023 10:09:23 | time worked updated to 17:45:00 by Kirk Van
            Gilder (kirk)
          </li>
        </ul>
        <strong class="underline text-sky-400"
          ><a href="/">See more...</a></strong
        >
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .vl {
    border-left: 1px solid black;
    height: 152px;
  }

  .ticket-section {
    @apply container rounded-lg border border-black bg-stone-100 p-5;
  }
</style>
