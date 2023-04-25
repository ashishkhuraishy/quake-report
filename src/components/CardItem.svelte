<script lang="ts">
	import type { QuakeInfo } from "src/routes/+page";

    export let report: QuakeInfo;
    var style = `flex justify-center items-center rounded-full p-4 ${"bg-red-" + (Math.floor(Math.abs(report.mag) + 1) * 100)} text-sm w-10 h-10 ${report.mag < 3 ? 'text-black' : 'text-white'}`


    $: date = new Date(report.time)
</script>


<div class="p-4 bg-neutral-200 rounded-xl my-5">
    <div class="flex flex-auto items-center space-x-4">
        <div class={style} >{report.mag}</div>
        <div class="text-start">
            <h5 class="text-sm font-bold">{report.place}</h5>
            <!-- get date from epoch time -->
            <div class="text-xs">{date.toString()}</div>
        </div>
    </div>
</div>