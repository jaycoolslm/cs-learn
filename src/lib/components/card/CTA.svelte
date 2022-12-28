<script lang="ts">
    export let href: string;
    export let aText: string;
    export let style: string = "";
</script>

<section {style}>
    <slot />
    <a {href}>{aText}</a>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        // align-items: center;
        text-align: center;
        gap: 2rem;
        background-color: white;
        a {
            padding: 1rem;
            text-decoration: none;
            color: white;
            font-weight: 600;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
            background-color: black;
            &:hover {
                background-color: var(--green);
            }
        }
    }
</style>
