<template>
  <nav :class="{ sideNavOpened: sideNavOpened }">
    <div class="container flex navContainer">
      <a href="/">
        <h2 class="no-margin bold textColor1">me.</h2>
      </a>

      <div class="iconContainer" id="openSideNav" @click.prevent="openSideNav">
        <font-awesome-icon :icon="['fas', 'bars']" style="color:var(--text1)" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.$eventBus.$on("closeSideNav", () => {
      this.sideNavOpened = false;
    });
  },
  data() {
    return {
      sideNavOpened: false
    };
  },
  methods: {
    openSideNav() {
      this.sideNavOpened = true;
      this.$eventBus.$emit("openNav");
    }
  }
};
</script>

<style scoped>
nav {
  background: var(--bg2);
  padding: 20px 25px;
  position: sticky;
  top: -1px;

  z-index: 20;
}
nav.sideNavOpened {
  opacity: 0;
}
.navContainer {
  justify-content: space-between;
  align-items: center;
}
.container::before,
.container::after {
  content: none;
}
a {
  text-decoration: underline;
}
.iconContainer {
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 57px !important;
  border-radius: 50%;
  border: 3px solid var(--text2);
  color: var(--text2);
  font-size: 20px;
  cursor: pointer;
}
</style>
