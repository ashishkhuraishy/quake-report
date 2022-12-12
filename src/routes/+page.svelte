<script lang="ts">
   import type { PageData } from "./$types"; 

   export let data: PageData;
</script>


{#each data.reports as report }
   <p> {report.id} - {report.place} - {report.mag} </p> 
{/each}
