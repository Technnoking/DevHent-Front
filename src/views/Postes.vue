<template>
    <div class="postes">
        <Pub class="pub" />
        <Pub class="pub" />
        <Pub class="pub" />
        <Pub class="pub" />
        <Pub class="pub" />
        <Pub class="pub" />
    </div>
</template>

<script>
import Pub from '../components/Pub.vue';

export default {
    components: { Pub }
}
</script>

<style lang="scss" scoped>
    .postes {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .pub {
        box-shadow: 0 3px 6px var(--clr-primary-alt);
    }
</style>