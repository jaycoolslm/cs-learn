<script lang="ts">
    import Siema from "siema";
    import { onMount } from "svelte";
    let slider: any, prev: any, next: any, radioSlider;
    let select = 0;
    onMount(() => {
        slider = new Siema({
            selector: ".siema",
            duration: 200,
            easing: "ease-in-out",
            perPage: 1,
            startIndex: 0,
            draggable: false,
            threshold: 20,
            rtl: false,
            onInit: () => {},
            onChange: () => {},
        }); //end Siema constructor

        prev = () => {
            slider.prev();
            if (select > 0) {
                select--;
            } else {
                select = 2;
            }
        };
        next = () => {
            slider.next();
            if (select < 2) {
                select++;
            } else {
                select = 0;
            }
        };
    }); //end onMount
</script>

<section>
    <h1>Apply to become a host</h1>
    <span class="progress" />
    <span class="remaining" />
    <!-- <div class="bullet">
        {#each { length: 5 } as _, i}
            <input
                class="radio"
                bind:this={radioSlider}
                type="radio"
                id={i.toString()}
                name="slider-radio"
                value={i}
                checked={select == i}
                on:click={() => {
                    slider.goTo(i);
                }}
            />
        {/each}
    </div> -->
    <div class="siema">
        <div>
            <h2>Name</h2>
            <input type="text" name="name" id="name" placeholder="Joe Bloggs" />
            <h2>Area of Expertise</h2>
            <!-- Add dropdown here -->
            <input type="text" name="title" id="title" placeholder="Writer" />
            <!-- Add email field -->
        </div>
        <div>
            <h2>Bio</h2>
            <textarea
                name="bio"
                id="bio"
                placeholder="Hi, I'm Jake. I'm a student at University of Nottingham studying Chemical Engineering who works as a professional web 3.0 fullstack developer, specialising in Hedera Hashgraph"
            />
        </div>
        <div>
            <h2>Course Title</h2>
            <h5>This can be amended</h5>
            <input
                type="text"
                name="course-title"
                id="course-title"
                placeholder="Introduction to Chess"
            />
            <h2>Key Words</h2>
            <h5>Seperate with commas</h5>
            <input
                type="text"
                name="keywords"
                id="keywords"
                placeholder="Chess, Board Games, Strategy"
            />

            <h2>Difficulty</h2>
            <div>
                <input type="radio" id="easy" name="difficulty" value="easy" />
                <label for="easy">Easy</label>

                <input
                    type="radio"
                    id="intermediate"
                    name="difficulty"
                    value="intermediate"
                />
                <label for="intermediate">Intermediate</label>

                <input
                    type="radio"
                    id="difficult"
                    name="difficulty"
                    value="difficult"
                />
                <label for="difficult">Difficult</label>
                <div style="height: 1rem;" />
            </div>
        </div>
        <div>
            <h2>Description of the topic being taught</h2>
            <textarea
                name="description"
                id="description"
                placeholder="This course will teach you the basics of chess, including the rules, how to move the pieces, and how to checkmate your opponent."
            />
        </div>
        <div>
            <h2>Session plan</h2>
        </div>
    </div>
    <button id="back" on:click={prev}>Back</button>
    <button id="next" on:click={next}>Next</button>
</section>

<style lang="scss">
    section {
        background-color: white;
        padding: 2rem;
        h1 {
            text-align: center;
        }
        span.progress {
            margin: 2rem auto;
            width: 80%;
            display: block;
            position: relative;
            height: 0.5rem;
            background-color: var(--orange);
            border-radius: 0.5rem;
            &::after {
                position: absolute;
                content: "";
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 1;
                background-color: #eee;
                border-radius: 0.5rem;
            }
        }
        .siema {
            div {
                input[type="text"],
                textarea {
                    width: 100%;
                    margin-bottom: 1rem;
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    border: 1px solid lightgrey;
                }
                textarea {
                    height: 200px;
                }
            }
        }
    }

    #back,
    #next {
        padding: 0.5rem 1.5rem;
        font-weight: 600;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    #next {
        float: right;
        background-color: black;
        color: white;
    }
</style>
