<script lang="ts">
  import type { Employee, Status } from '$lib/types';

  import { capitalizeFirstLetter } from '$lib/utils/capitalize';

  import alexAvatar from '$lib/assets/alex.png';
  import kirkAvatar from '$lib/assets/kirk.png';
  import randyAvatar from '$lib/assets/randy.png';
  import joelAvatar from '$lib/assets/joel.png';
  import Timer from './Timer.svelte';

  let username: string;
  let isUpdated: boolean = false;

  const status: Status[] = [
    { id: 1, status: 'new' },
    { id: 2, status: 'submitted' },
    { id: 3, status: 'waiting' },
    { id: 4, status: 'hold' },
    { id: 5, status: 'replied' },
    { id: 6, status: 'resolved' },
  ];

  const employee: Employee[] = [
    { id: 1, person: 'Alex W.' },
    { id: 2, person: 'Randy P.' },
    { id: 3, person: 'Kirk V.' },
    { id: 4, person: 'Joel C.' },
  ];
  let selected: Employee;
</script>

<section id="top-agent-section" class="ticket-section mb-5">
  <div id="general-info" class="text-center">
    {#if isUpdated}
      <div
        class="my-2 rounded-full bg-sky-400 px-3 py-1 font-bold text-white hover:bg-amber-500"
      >
        <i class="fa-solid fa-check" /> Updated
      </div>
    {/if}

    <strong>General Info:</strong>
    <ul>
      <li class="flex flex-row justify-between">
        <span class="italic">Created Date:</span>
        <strong>02/01/2023</strong>
      </li>
      <li class="flex flex-row justify-between">
        <span class="italic">Last Updated: </span>
        <strong class="text-red-500">04/06/2023</strong>
      </li>
    </ul>
    <hr class="border border-solid border-black mx-auto w-[60%] my-3" />
    <div class="select-wrapper">
      <strong class="font-roboto-condensed italic">Time:</strong>
      <Timer />
    </div>
    <form action="POST">
      <div class="select-wrapper">
        <label for="assigned-to"
          ><strong class="font-roboto-condensed italic">Assigned:</strong>
        </label>
        <img
          id="avatar"
          class="inline-block h-10"
          src={username === 'Kirk V.'
            ? kirkAvatar
            : username === 'Randy P.'
            ? randyAvatar
            : username === 'Joel C.'
            ? joelAvatar
            : alexAvatar}
          alt="avatar"
        />
        <select
          id="assigned-to"
          name="assigned-to"
          bind:value={selected}
          on:change={() => {
            username = selected.person;
          }}
          class="select-style"
        >
          {#each employee as employee}
            <option value={employee}>{employee.person}</option>
          {/each}
        </select>
      </div>
      <div class="select-wrapper">
        <label for="status"
          ><strong class="font-roboto-condensed italic">Status:</strong></label
        >
        <select id="status" name="status" class="select-style">
          {#each status as ticketStatus}
            <option value="status"
              >{capitalizeFirstLetter(ticketStatus.status)}</option
            >
          {/each}
        </select>
      </div>
      <div class="select-wrapper">
        <label for="priority"
          ><strong class="font-roboto-condensed italic">Priority:</strong
          ></label
        >
        <select id="priority" name="priority" class="select-style">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </div>
      <div class="select-wrapper">
        <label for="cateogry"
          ><strong class="font-roboto-condensed italic">Cateogry:</strong
          ></label
        >
        <select id="cateogry" name="cateogry" class="select-style">
          <option value="general">General Design</option>
          <option value="email">Email</option>
          <option value="agent">Agent Request</option>
          <option value="website">Website</option>
        </select>
      </div>

      <button
        type="submit"
        class="green-edit-button text-sm mt-1"
        on:click={() => (isUpdated = true)}>Submit Update</button
      >
    </form>
  </div>
</section>

<style lang="postcss">
  .ticket-section {
    @apply container rounded-lg border border-black bg-stone-100 px-5 py-2;
  }

  .select-wrapper {
    @apply mb-1 flex flex-row items-center justify-between border border-slate-300 bg-zinc-100 p-2;
  }

  .select-style {
    @apply rounded px-2 py-1;
  }
</style>
