<script lang="ts">
	import type { QuakeInfo } from "src/routes/+page";

    export let report: QuakeInfo;
</script>


<div class="p-4 bg-neutral-200 rounded-xl my-5">
    <div class="flex flex-auto items-center space-x-4">
        <div class="flex justify-center items-center rounded-full bg-green-600 p-4 text-sm w-10 h-10 text-white">{report.mag}</div>
        <h5 class="text-sm">{report.place}</h5>
    </div>
</div>