<template>
    <aside :class="`${isActive && 'isActive'}`">
        <div class="logo">
            <i class="bx bxl-deviantart"></i>
            <h1>FIF</h1>
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu()">
                <i class="bx bxs-chevrons-right"></i>
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="btn" to="/">
                <i class="bx bxs-home"></i>
                <p class="text">Home</p>
            </router-link>
            <router-link class="btn" to="/new">
                <i class="bx bxs-plus-circle"></i>
                <p class="text">Post</p>
            </router-link>
            <router-link class="btn" to="/notification">
                <i class="bx bxs-notification"></i>
                <p class="text">Notification</p>
            </router-link>
            <router-link class="btn" to="/team">
                <i class="bx bxs-group"></i>
                <p class="text">Team</p>
            </router-link>
        </div>
        <div class="flex"></div>
        <div class="footer">
            <router-link class="btn" to="/settings">
                <i class="bx bxs-cog"></i>
                <p class="text">Settings</p>
            </router-link>
            <router-link class="btn" to="/LogOut">
                <i class="bx bxs-log-in-circle"></i>
                <p class="text">LogOut</p>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
const isActive = ref(localStorage.getItem("isActive") === "true")
const ToggleMenu = () => {
    isActive.value = !isActive.value
    localStorage.setItem("isActive", isActive.value)
}
</script>

<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 45px);
    min-height: 100vh;
    overflow: hidden;
    padding: var(--padding);
    padding-right: 0;
    padding-right: 0;
    background: var(--clr-primary-400);
    color: var(--white);
    transition: var(--transition);

    .flex {
        flex: 1 1 0;
    }

    i {
        font-size: var(--fs-700);
        color: var(--white);
    }

    .logo {
        display: flex;
        align-items: center;
        gap: var(--fs-300);
        margin-bottom: var(--padding);
        cursor: pointer;

        h1 {
            font-size: var(--fs-secondary-heading);
            font-weight: var(--fw-semi-bold);

            &::selection {
                background: none;
            }
        }

        i {
            font-size: var(--fs-900);
            color: var(--clr-accent-400);
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        position: relative;
        top: 0;
        left: -1.3rem;
        transition: var(--transition);

        .menu-toggle {
            transition: var(--transition);

            i {
                transition: var(--transition);
            }

            &:hover {
                i {
                    color: var(--clr-accent-400);
                    transform: translateX(.5rem);
                }
            }
        }
    }

    .menu {
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }

    h1,
    h3,
    .btn .text {
        opacity: 0;
        transition: var(--transition);
    }

    h3 {
        text-align: center;
        margin-bottom: 1rem;
        font-weight: var(--fw-bold);
        color: var(--white-alt);
    }

    .btn {
        display: flex;
        align-items: center;
        gap: var(--fs-400);
        text-decoration: none;
        transition: var(--transition);
        padding: .5rem 1rem .5rem .5rem;

        .text {
            color: var(--white);
            font-size: var(--fs-600);
        }

        &.router-link-exact-active {
            background: var(--white-alt);
            border-right: var(--border-2) var(--clr-accent-400);
            border-radius: 39px 0 0 39px;

            i,
            .text {
                color: var(--clr-accent-400);
                font-weight: var(--fw-semi-bold);
            }
        }
    }

    .footer {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &.isActive {
        width: 300px;

        .menu-toggle-wrap {
            top: -4rem;

            .menu-toggle {
                transform: rotate(180deg);
            }
        }

        h1,
        h3,
        .btn .text {
            opacity: 1;
        }
    }

    @media (max-width: 840px) {
        position: fixed;
        z-index: 99;
        left: 0;
    }
}</style>