<script>
  import logo from '$lib/assets/garthok2-logo.png';
  import '../app.css';
</script>

<nav class="flex flex-row px-4 place-content-between items-center py-3">
  <a href="/"
    ><img
      src={logo}
      alt="garthok 2.0 logo"
      class="h-[90px] transition-all hover:-rotate-2"
    /></a
  >
  <div id="searchbar" class="relative w-1/3">
    <input
      type="search"
      id="default-search"
      class="block w-full pl-5 p-3 text-sm text-gray-900 border border-black rounded-full bg-gray-50"
      placeholder="Search Tickets, Agent, or Titles..."
    />
    <button
      type="submit"
      class="text-black bg-gray-50 absolute right-3.5 bottom-1.5 hover:bg-slate-400 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
      ><i class="fa-solid fa-magnifying-glass" /></button
    >
  </div>
  <div id="navbuttons" class="navbutton-wrapper | flex flex-row items-center">
    <a
      href="/"
      class=" flex flex-col items-center hover:text-sky-400 p-2 transition-all hover:mb-2"
      ><i class="fa-solid fa-house-chimney | text-2xl" />Home
    </a>
    <a
      href="/reports"
      class="flex flex-col items-center hover:text-sky-400 p-2 transition-all hover:mb-2"
      ><i class="fa-solid fa-chart-bar | text-2xl" />Reports</a
    >
  </div>
</nav>
