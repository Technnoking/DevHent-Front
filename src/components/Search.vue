<template>
    <div class="search">
        <form action="">
            <input type="text" name="search" placeholder="Recherche">
            <i class="bx bx-search"></i>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

form {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    max-width: 700px;
    width: 100%;
    margin-inline: auto;
    border: var(--border-1);
    border-radius: 10px;
    padding: .5rem;

    i {
        font-size: var(--fs-700);
        color: var(--black);
        cursor: pointer;
        background: var(--clr-accent-400);
        padding: .5rem;
        border-radius: 10px;
    }

    input {
        width: 100%;
        font-size: var(--fs-600);
        padding: var(--padding-1);
        color: var(--black);
    }
}
</style>