<script lang="ts">
  import PillButton from "$lib/PillButton.svelte";
</script>

<div id="new-ticket" class="p-5">
  <PillButton href="/newticket" label="+ NEW TICKET" />
</div>

<div class=" px-5 flex flex-row items-center justify-between">
  <div class="font-roboto font-bold text-xl">OPEN TICKET</div>
  <div class="font-roboto font-thin text-slate-500">
    Number of Tickets: <strong>43</strong>
  </div>
</div>

<table class="table-auto">
  <thead class="border border-solid hover:bg-red-500">
    <tr>
      <th>Select</th>
      <th>Ticket #</th>
      <th>Title</th>
      <th>Assigned To</th>
      <th>Category</th>
      <th>Date Created</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>

<style lang="postcss">
  .font-roboto {
    font-family: "Roboto Condensed", sans-serif;
  }
</style>
