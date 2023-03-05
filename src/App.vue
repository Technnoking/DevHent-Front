<template>
  <div class="app">
    <div id="navbar">
      <div class="logo_search">
        <div class="logo">
          <img src="./assets/svg/logo.png" alt="High Tech Logo">
          <h1>FIF</h1>
        </div>
        <div class="search">
          <input type="text" placeholder="Rechercher...">
        </div>
      </div>
      <div class="profile">
        <img src="./assets/imgs/arrival-4.png" alt="profile">
      </div>
    </div>
    <div class="container">
      <Aside />
      <main class="main" @hook:updated="animateRoute">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </main>
    </div>
  </div>
</template>
<script>
import Aside from './components/Aside.vue';
export default {
  name: "app",
  components: { Aside },
  methods: {
    animateRoute() {
      const currentRoute = this.$route;
      const transitionName = currentRoute.meta.transition || 'fade';

      const routerView = document.querySelector('router-view');
      routerView.classList.add(`router-${transitionName}-enter-active`);

      setTimeout(() => {
        routerView.classList.remove(`router-${transitionName}-enter-active`);
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f8f8;

  .logo_search {
    display: flex;
    align-items: center;
    gap: 1em;
  }
}

.logo {
  display: flex;
  gap: 1em;
  position: relative;
  padding-right: 1em;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    right: 0;
    background: #000;
  }

  img {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.search {
  max-width: 600px;
  width: 100%;
  padding: 1em;

  input {
    min-width: 200px;
    width: 100%;
    font-size: 1em;
  }
}

.profile {
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
    cursor: pointer;
  }
}

.container {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;
    margin: 5rem;

  }
}
</style>