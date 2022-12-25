<script lang="ts">
    import { onMount } from "svelte";
    import chartjs from "chart.js";

    export let difficulty: number;
    let colour: string;
    switch (difficulty) {
        case 1:
            colour = "#165954";
            break;
        case 2:
            colour = "#f9ac66";
            break;
        case 3:
            colour = "#ed6b5b";
            break;
        default:
            colour = "#d3d3d3";
    }

    const data = {
        datasets: [
            {
                data: [difficulty, 3 - difficulty],
                backgroundColor: [colour, "#d3d3d3"],
            },
        ],
    };

    let ctx: any, chartCanvas: any;

    onMount(async () => {
        ctx = chartCanvas.getContext("2d");
        new chartjs(ctx, {
            type: "doughnut",
            data: {
                datasets: [
                    {
                        backgroundColor: [colour, "#d3d3d3"],
                        borderColor: "white",
                        data: [difficulty, 3 - difficulty],
                    },
                ],
            },
            options: {
                plugins: {
                    subtitle: {
                        display: true,
                        text: "Difficulty",
                    },
                },
            },
        });
    });

    $: console.log(chartCanvas);
</script>

<canvas bind:this={chartCanvas} width={128} id="difficultyDonut" />
