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
  <div id="inner-container" class="flex flex-row gap-3 flex-grow">
    <div id="left-info-request-replies" class="container">
      <section id="top-agent-section" class="ticket-section">
        <div id="agent-container" class="container flex flex-col">
          <a href="/editagent/{agentId}" class="cursor-pointer">
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
      <section class="ticket-section">replies</section>
    </div>
    <div id="right-general-info-history" class="container basis-2/5">
      <section id="top-agent-section" class="ticket-section">
        <div id="general-info" class="text-center">
          General Info:
          <button
            class="my-2 rounded-full bg-sky-400 px-3 py-1 font-bold text-white hover:bg-amber-500"
            ><i class="fa-solid fa-check" /> Updated</button
          >
          <ul>
            <li>
              <span class="italic">Created Date:</span>
              <strong>02/01/2023</strong>
            </li>
            <li>
              <span class="italic">Last Updated: </span>
              <strong>04/06/2023</strong>
            </li>
          </ul>
          <hr class="border border-solid border-black mx-auto w-[60%] mt-3" />
          <form action="POST">
            <div class="select-wrapper">
              <label for="assigned-to">Assigned to:</label>
              <select id="assigned-to" name="assigned-to">
                <option value="alex-w">Alex W.</option>
                <option value="randy-p">Randy P.</option>
                <option value="joel-c">Joel C.</option>
                <option value="kirk-v">Kirk V.</option>
              </select>
            </div>
            <div class="select-wrapper">
              <label for="status">Status:</label>
              <select id="status" name="status">
                <option value="new">New</option>
                <option value="submitted">Submitted</option>
                <option value="waiting">Waiting</option>
                <option value="hold">Hold</option>
                <option value="replied">Replied</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
            <div class="select-wrapper">
              <label for="priority">Priority:</label>
              <select id="priority" name="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
            <div class="select-wrapper">
              <label for="cateogry">Cateogry:</label>
              <select id="cateogry" name="cateogry">
                <option value="general">General Design</option>
                <option value="email">Email</option>
                <option value="agent">Agent Request</option>
                <option value="website">Website</option>
              </select>
            </div>
            <button type="submit" class="green-edit-button text-sm"
              >Confirm Changes</button
            >
          </form>
        </div>
      </section>
      <div id="ticket-history">
        <strong class="underline text-sky-400">Ticket History</strong>
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

  .select-wrapper {
    @apply border border-slate-300 bg-zinc-200;
  }
</style>
