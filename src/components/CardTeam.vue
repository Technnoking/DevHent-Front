<template>
  <div class="card_team">
    <div class="content">
      <i class="bx bxs-network-chart"></i><br>
      <h2 class="titcle">Reseau</h2>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--fs-600);
  width: 200px;
  height: 200px;
  background: var(--clr-accent-400);
  border-radius: 10px;
  color: var(--white);

  i {
    font-size: var(--fs-900);
  }

  h2 {
    font-size: var(--fs-secondary-heading);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
  }
}
</style>