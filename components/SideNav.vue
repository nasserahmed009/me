<template>
  <div class="sideNav shadow" :class="{ opened: opened }">
    <div class="iconContainer" @click="closeSideNav">
      <font-awesome-icon :icon="['fas', 'times']" />
    </div>

    <hr />

    <a href="">
      <h2 class="no-margin">🏠</h2>
      <span href="/" class=""> Home</span>
    </a>
    <a href="/#projects" @click="goToSection('#projects')">
      <h2 class="no-margin">👨‍💻</h2>
      <span href="/" class=""> Projects</span>
    </a>
    <a href="/#contact" @click="goToSection('#contact')">
      <h2 class="no-margin">☎️</h2>
      <span href="/" class=""> Get In Touch</span>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    //
  },
  props: {
    opened: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    goToSection(section) {
      this.$eventBus.$emit("closeSideNav");
      this.$eventBus.$emit("goToSection", section);
    },
    handleCloseSideNav(e) {
      if (!this.opened) return;

      const elementInSideNav =
        $(".sideNav").has(e.target).length > 0 || $(e.target).is(".sideNav");
      const elmentInOpenSideNavButton =
        $("#openSideNav").has(e.target).length > 0 ||
        $(e.target).is("#openSideNav");

      if (!elementInSideNav && !elmentInOpenSideNavButton) {
        this.closeSideNav();
      }
    },
    closeSideNav() {
      this.$eventBus.$emit("closeSideNav");
    }
  },
  watch: {
    opened(newValue) {
      if (newValue) {
        $(window).on("click", this.handleCloseSideNav);
      } else {
        //remove event handler when navbar is closed for performance
        $(window).off("click");
      }
    }
  }
};
</script>

<style scoped>
.sideNav {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  position: fixed;
  right: 0px;
  top: 0px;
  background: var(--bg1);
  width: 250px;
  height: 100%;
  z-index: 10;
  transform: translateX(320px);
  -moz-transform: translateX(320px);
  -webkit-transform: translateX(320px);
  -o-transform: translateX(320px);
  padding: 50px 25px;
}
.sideNav a {
  display: inline-block;
  margin: 20px 0px;
}
.sideNav.opened {
  transform: translateX(0);
  -moz-transform: translateX(0);
  -webkit-transform: translateX(0);
  -o-transform: translateX(0);
}
.iconContainer {
  width: 60px;
  height: 60px;
  margin: 0 auto 30px auto;
  text-align: center;
  line-height: 57px !important;
  border-radius: 50%;
  border: 3px solid var(--text2);
  color: var(--text2);
  font-size: 20px;
  cursor: pointer;
}
</style>
