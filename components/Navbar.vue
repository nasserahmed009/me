<template>
  <nav class="shadow">
    <div class="container flex navContainer">
      <h2 class="no-margin bold textColor3">me.</h2>

      <div class="icon" id="openSideNav" @click.prevent="openSideNav">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    openSideNav() {
      this.$eventBus.$emit("openNav");
    }
  }
};
</script>

<style scoped>
nav {
  background: var(--bg4);
}
.navContainer {
  justify-content: space-between;
  align-items: center;
}
.container::before,
.container::after {
  content: none;
}
</style>
