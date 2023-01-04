<script lang="ts">
    import Cta from "$lib/components/card/CTA.svelte";
</script>

<h1>Do you want to teach others your skills?</h1>

<main>
    <Cta
        href="host/create"
        aText="Create host account"
        style="width: 50%; min-width: 266px"
    >
        <h2>Sign up to become a host</h2>
        <div
            style=" display: flex; align-items:center; justify-content: space-evenly; flex-wrap: wrap; gap: 1rem;"
        >
            <img
                src="/logos/brands/shopify.png"
                alt="Shopify Circle Students"
                height="50"
            />
            <img
                src="/logos/brands/htmlcss.png"
                alt="HTML CSS Circle Students"
                height="50"
            />
            <img
                src="/logos/brands/python.png"
                alt="Python Circle Students"
                height="50"
            />
            <img
                src="/logos/brands/hedera.png"
                alt="Hedera Circle Students"
                height="50"
            />
        </div>
        <strong>and more...</strong>
        <p>
            Hosting your own lessons on Circle Students is a great way to give
            back and earn CSCs.
        </p>
        <p>
            Simple sign up to become a host or log in if you already have an
            account
        </p>
    </Cta>

    <div class="right">
        <div>
            <h2>How to make a course</h2>
            <p>
                Take our course on how to make a course <a
                    href="mailto: contact@circlestudents.co.uk"
                >
                    here</a
                >!
            </p>
        </div>
        <Cta href="/" aText="Log in">
            <h2>Already have an account?</h2>
            <p>
                If you already have a host account registered with us, log in
                with your details below.
            </p>
        </Cta>
    </div>
</main>

<style lang="scss">
    h1 {
        text-align: center;
        margin-bottom: 2rem;
    }
    main {
        display: flex;
        justify-content: space-evenly;
        // align-items: flex-start;
        gap: 2rem;
        flex-wrap: wrap;
        div.right {
            width: 40%;
            min-width: 266px;
            div {
                display: flex;
                flex-direction: column;
                padding: 2rem;
                // align-items: center;
                text-align: center;
                gap: 2rem;
                background-color: white;
                margin-bottom: 2rem;
            }
        }
    }
</style>
