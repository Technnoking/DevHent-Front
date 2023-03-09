<template>
  <div class="team">
    <Search/>
    <div class="container">
      <CardTeam v-for="card in 4" :key="card" />
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import CardTeam from '@/components/CardTeam.vue';

export default {
  components: { Search, CardTeam }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 8rem;
  margin:0 auto;
  gap: 1rem;
}
</style>