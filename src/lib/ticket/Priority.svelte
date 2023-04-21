<script lang="ts">
  export let priority: string;
</script>

<span
  class=" {priority === 'low'
    ? 'bg-orange-400'
    : priority === 'high'
    ? 'bg-red-600'
    : 'bg-sky-500'}
  font-semibold text-white border border-solid border-black rounded-full block"
  >{priority.toUpperCase()}</span
>
