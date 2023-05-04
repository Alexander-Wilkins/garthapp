<script>
  import db from '$lib/assets/db.json';

  const date = new Date(db.date_created.time);
  const formattedDate = `${date.toLocaleDateString()}, ${date.toLocaleTimeString(
    'en-US',
    { hour: 'numeric', minute: 'numeric' }
  )}`;
</script>

<section class="ticket-section">
  <div
    class="bg-red-200 rounded-2xl p-4 flex flex-row justify-between items-center mb-4"
  >
    <span>
      <strong class="text-lg mr-4">Initial Request:</strong>
      <a href="/"
        ><button
          class="rounded-full border border-gray-600 text-teal-600 py-[0.125rem] px-3 hover:bg-slate-100"
          ><i class="fa-solid fa-pen-to-square" /> Edit Post</button
        ></a
      >
    </span>
    <a href="#bottom-of-page" class="text-teal-600 hover:text-sky-700 underline"
      >Go to Latest Reply <i class="fa-solid fa-arrow-down" /></a
    >
  </div>
  <div id="body-copy" class="text-sm mb-12 mt-5">{db.body}</div>
  <section id="post-data">
    <hr class="w-[300px] my-2 mt-5" />
    <ul class="font-roboto-condensed">
      <li>
        Posted By: <strong>{db.date_created.posted_by}</strong>
      </li>
      <li class="italic font-light">Date: {formattedDate}</li>
      <li class="italic font-medium">
        Attachments <i class="fa-solid fa-paperclip" />:
        <span class="font-light ml-2">none</span>
      </li>
    </ul>
    <div id="reply-button" class="flex justify-end">
      <button class="blue-sm-button"
        >Submit Reply <i class="fa-solid fa-reply" /></button
      >
    </div>
  </section>
</section>

<style lang="postcss">
  .ticket-section {
    @apply container rounded-lg border border-black bg-white px-7 py-5 shadow-lg;
  }
  hr {
    border-width: 1px;
    border-color: black;
  }
</style>
