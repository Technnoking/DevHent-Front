<template>
    <aside class="aside" :class="{ active: isActive }">
        <div class="navigation">
            <div class="menu-toggle-wraper" @click="toggleMenu">
                <div class="toggle">
                    <img src="../assets/svg/scrollbarChevronUp.svg" alt="">
                </div>
            </div>
            <div class="links">
                <router-link to="/postes">
                    <div class="link-item">
                        <img src="../assets/svg/file-line.svg" alt="">
                        <p>Postes</p>
                    </div>
                </router-link>

                <router-link to="/notification">
                    <div class="link-item">
                        <img src="../assets/svg/notification-line.svg" alt="">
                        <p>Notifications</p>
                    </div>
                </router-link>

                <router-link to="/teams">
                    <div class="link-item">
                        <img src="../assets/svg/users-solid.svg" alt="">
                        <p>Teams</p>
                    </div>
                </router-link>

                <router-link to="/projects">
                    <div class="link-item">
                        <img src="../assets/svg/bookmark.svg" alt="">
                        <p>Projects</p>
                    </div>
                </router-link>

            </div>
        </div>
    </aside>
</template>
  
<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggleMenu = () => {
    isActive.value = !isActive.value;
}
</script>
  
<style lang="scss" scoped>
.aside {
    position: fixed;
    width: 64px;
    min-width: 64px;
    top: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
    background: #141414;
    color: var(--clr-secondary);
    padding-top: 6rem;

    &.active {
        width: 300px;
        .toggle img {
            transform: rotate(-90deg);
        }

        a {
            border-radius: 0;
        }
    }
}

.menu-toggle-wraper {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;

    img {
        transition: var(--transition);
        transform: rotate(90deg);
        width: 60px;
    }
}

.links {
    display: flex;
    flex-direction: column;
    gap: var(--pad-2);
    margin-top: 2em;


    a {
        color: #fff;
        text-decoration: none;
        text-align: start;
        font-size: var(--fs-2);
        text-transform: uppercase;
        padding: 15px;
        border-radius: 39px 0 0 39px;
        border-right: var(--border-alt) var(--clr-accent-alt);
        cursor: pointer;
        transition: var(--transition);

        &:hover,
        &.router-link-exact-active {
            border-right: var(--border-alt) var(--clr-accent);
            background: var(--clr-accent-alt);
        }

        .link-item {
            display: flex;
            align-items: center;
            gap: 2rem;
        }
    }


    .link-item img {
        min-width: 30px;
        height: 30px;
    }
}
</style>