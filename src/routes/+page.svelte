<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    const { sessions } = data;
    console.log(sessions);

    let circleExpertOpen = false;
    let circleLearnerOpen = false;

    const circleExpert = () => {
        circleLearnerOpen = false;
        circleExpertOpen = !circleExpertOpen;
    };

    const circleLearner = () => {
        circleExpertOpen = false;
        circleLearnerOpen = !circleLearnerOpen;
    };
</script>

<main>
    <section class="intro">
        <img src="/logos/cs-linear/orange.svg" alt="Circle Students Learn" />
        <h3>Welcome to Circle Students Learn</h3>
        <p>
            Here at Circle Students, we believe everyone has something to offer
            and something to learn. This Peer-to-Peer platform offers everyone a
            chance to learn from each other. See, there are 2 flows in this
            platform:
        </p>
        <div class="buttons">
            <button on:click={circleExpert}
                >Circle Expert <i
                    class="fa-solid fa-caret-down"
                    class:open={circleExpertOpen}
                /></button
            >
            <button on:click={circleLearner}
                >Circle Learner<i
                    class="fa-solid fa-caret-down"
                    class:open={circleLearnerOpen}
                /></button
            >
        </div>

        {#if circleExpertOpen}
            Do you have a certain skill or experience in a specific sector? Do
            you know a language or can you code? Most importantly, do you have
            the drive and experience to show that you know what you’re doing? If
            so, Circle Students wants you! The only thing more important than
            learning, is showing what you’ve learned. We are giving you the
            option to stand out, and show your expertise in whatever area you
            believe to have some knowledge in. It can be small or large. It can
            be a specific section of a wider subject or it can be the basics and
            fundamentals of something huge. Other than the autonomy of having
            your own course and showing your knowledge, this opportunity is
            great for your career and CV, as it shows a majority of key skills:
            Communication Presentation Professionalism Knowledge in your chosen
            field Interpersonal skills The list goes on! Oh, and it’s also
            credited. (And if you want Circle Students’ cheat sheets on how to
            show these great skills and values into career applications, go have
            a look at some of our student blogs by people who know what they’re
            doing! [Hyperlink]) The process to becoming a Circle Expert is
            straightforward and even has a course on how to create a course
            [Hyperlink].
        {/if}

        {#if circleLearnerOpen}
            Have you ever thought about learning something outside of your
            degree that could be useful and exciting, but don’t know what? Well,
            Circle Students offers courses for students by students. Which means
            the things you could be learning—from Python coding to Project
            Management [or something more interesting if we have it]—will be
            easily accessible and interpersonal. Everyone has something new to
            learn, and not only can it be something exciting that could open up
            a new world of interest for you, but it is also very useful for
            helping you understand future career paths. Circle Students
            understands that whilst your degree is very important, preparing for
            jobs after university is a whole different ballgame. Whilst we have
            space for blogs and information to do with careers from different
            student experiences here [Hyperlink], doing these courses are a
            great way to get ahead with new and interesting skills. Best of all,
            it’s credited. When you complete a Circle Students course, you get a
            certificate [and you can explain some of the blockchain and NFT
            stuff here if you want].
        {/if}
    </section>

    <section class="lessons">
        <div class="live-lessons">
            <h2>Live lessons right now</h2>
        </div>

        <div class="upcoming-lessons">
            <h2>Upcoming lessons</h2>
        </div>
    </section>
</main>

<style lang="scss">
    .intro {
        background-color: white;
        text-align: center;
        padding: 2rem;
        img {
            width: 80%;
            max-width: 700px;
        }
        & > * {
            margin-bottom: 1rem;
        }
        h3 {
            color: var(--orange);
        }
        .buttons {
            display: flex;
            gap: 2rem;
            button {
                width: calc(50% - 1rem);
                background-color: var(--orange);
                border: none;
                color: white;
                padding: 1rem;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                position: relative;
                transition: all 0.3s ease;
                i {
                    position: absolute;
                    right: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    transition: all 0.3s ease;
                    &.open {
                        transform: translateY(-50%) rotate(180deg);
                    }
                }
                &:hover {
                    background-color: var(--dark-orange);
                }
            }
        }
    }

    .lessons {
        display: flex;
        justify-content: space-evenly;
        margin-top: 2rem;
        gap: 2rem;
        div {
            width: calc(50% - 1rem);
            background-color: white;
            padding: 2rem;
            text-align: center;
        }
    }
</style>
