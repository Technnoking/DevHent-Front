<template>
  <div id="app">
    <!-- SIDEBARRE -->
    <SideBarre />

    <main class="main">
      <transition name="route" mode="fade">
        <router-view/>
      </transition>
    </main>
  </div>
</template>
<script setup>
import SideBarre from './components/SideBarre.vue'
  components: { SideBarre }
</script>
<style lang="scss" scoped>
#app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
  }

  @media (max-width: 840px) {
    padding-left: 6rem;
  }
}

// transition route
.route-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.route-enter-active {
  transition: all .28s ease-out;
}
// .route-leave-to {
//   opacity: 0;
//   transform: translateY(50px);
// }
// .route-leave-active {
//   transition: all .28s ease-out;
// }
</style>
