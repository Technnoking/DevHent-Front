<template>
    <div class="error">
        <div class="container">
            <div class="text-image" @mousemove="handleMouseMove">
                <h1 class="title">404</h1>
                <img src="../assets/404/drop.svg" alt="Astro" v-bind:style="{ transform: circleTransform }">
            </div>
            <p class="description">Nous sommes désolés, mais la page que vous cherchez n'a pas été trouvée. Il est possible
                que le serveur rencontre des problèmes techniques. Veuillez réessayer plus tard.</p><br>
            <button type="button" class="home_back">Home</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "error",
    data() {
        return {
            mouseX: 0,
            mouseY: 0
        }
    },
    methods: {
        handleMouseMove(event) {
            this.mouseX = event.clientX / 40;
            this.mouseY = event.clientY / 40;
        }
    },
    computed: {
        circleTransform() {
            return `translate(${this.mouseX}px, ${this.mouseY}px)`;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/style.scss';

.error {
    width: 100%;
    height: 100vh;
    background: #06084c;
    background-image: url(../assets/404/BACKGROUNDdrop.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.container {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/404/stardrop.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    text-align: center
}

.text-image {
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
        margin-top: 5%;
        font-size: $fs-big;
        color: $body-1;
        user-select: none;
    }

    img {
        position: absolute;
        top: 30%;
        width: 200px;
        filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3));
        // box-shadow: 0 0 10px rgba(20, 20, 20, 0.781);
    }
}

.description {
    margin-top: 5%;
    font-size: $fs-2;
    font-weight: $fw-600;
    color: $white;
    inline-size: 66ch;
    margin-inline: auto;
}

.home_back {
    padding: 1rem 1.5rem;
    background: $white;
    color: $body-2;
    font-weight: $fw-600;
    font-size: $fs-2;
    margin-inline: auto;
    position: relative;
    z-index: 1;
    transition: $transition;
    overflow: hidden;

    &:hover {
        color: $white;
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        clip-path: circle();
        transform: scale(0);
        opacity: 0;
        width: 100%;
        height: 100%;
        background: $body-2;
        z-index: -1;
        transition: $transition;
    }

    &:hover::after {
        transform: scale(3);
        opacity: 1;
    }
}
</style>