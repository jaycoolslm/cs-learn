<script lang="ts">
    export let teacher: { data: any; id: string };
    const { data, id } = teacher;
</script>

<section>
    <img src={data.image.src} alt={data.image.alt} />
    <h2>{data.name}</h2>
    <h3>{data.title}</h3>
    <a href="teachers/{id}">View profile</a>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        min-width: 266px;
        width: 25%;
        padding: 2rem;
        gap: 1rem;
        border-radius: 0.5rem;
        h2,
        h3 {
            text-align: center;
        }
        img {
            width: 100px;
            border-radius: 100%;
        }
        a {
            background-color: var(--orange);
            text-decoration: none;
            color: white;
            font-weight: 600;
            width: 100%;
            text-align: center;
            padding: 1rem;
        }
    }
</style>
