<script lang="ts">
   import CardItem from "../components/CardItem.svelte";
   import type { PageData } from "./$types"; 

   export let data: PageData;
</script>

<h1 class="text-3xl">Quake Report</h1>
{#each data.reports as report }
   <CardItem report={report} />
{/each}
