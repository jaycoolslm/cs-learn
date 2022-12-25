<script lang="ts">
    import Stars from "$lib/components/icons/Stars.svelte";
    import Donut from "./Donut.svelte";

    export let data: {
        description: string;
        name: string;
        image: string;
        sessions: any;
        difficulty: number;
    };
    const { description, name, image, difficulty, sessions } = data;
</script>

<!-- <svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</svelte:head> -->

<section>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <div class="reviews">
        <p>5.0</p>
        <Stars stars={5.0} />
        <i />
        <a href="#">See reviews</a>
    </div>
    <p>{description}</p>
    <div class="metrics">
        <div class="difficulty">
            <Donut {difficulty} />
        </div>
        <div class="coin">
            <h3>15</h3>
            <h4>CS Coins</h4>
        </div>
    </div>
    <a href="#" class="see-more">See more</a>
    <div class="teacher">
        <p>Taught by <span>{"Jake"}</span></p>
    </div>
</section>

<style lang="scss">
    section {
        max-width: 20rem;
        text-align: center;
        background-color: white;
        padding: 2rem;
        & > * {
            margin-bottom: 1rem;
        }
        img {
            width: 75%;
            height: 192px;
            object-fit: contain;
        }
        .reviews {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            width: 100%;
            p,
            a {
                font-size: 0.8rem;
            }
            p {
                font-weight: 600;
            }
            i {
                height: 1rem;
                width: 1px;
                border-radius: 100%;
                background-color: #d3d3d3;
            }
            a {
                color: #d3d3d3;
                text-decoration: none;
            }
        }
        .metrics {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            .difficulty,
            .coin {
                display: flex;
                flex-direction: column;
                align-items: center;
                h3 {
                    font-size: 1rem;
                    font-weight: 800;
                }
                h4 {
                    font-size: 0.8rem;
                    color: #d3d3d3;
                }
            }

            .difficulty {
            }
        }
        a.see-more {
            display: block;
            width: 100%;
            background-color: var(--orange);
            text-decoration: none;
            color: white;
            padding: 0.5rem;
            font-weight: 300;
            border-radius: 0.5rem;
        }
    }
</style>
