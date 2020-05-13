<template>
  <div :class="{ darkTheme: darkTheme, lightTheme: !darkTheme }">
    <SideNav :opened="sideNavOpened" />

    <div
      class="app shadow"
      :class="{
        sideNavOpened: sideNavOpened
      }"
    >
      <div class="sideNavOverlay" v-show="sideNavOpened"></div>
      <div class="toggleTheme" @click="toggleTheme">
        <font-awesome-icon :icon="['fas', 'moon']" v-show="!darkTheme" />
        <font-awesome-icon
          :icon="['fas', 'sun']"
          v-show="darkTheme"
          style="color: #f1c40f"
        />
      </div>

      <Navbar />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.darkTheme {
  background: #1d2a39e3;
}
.sideNavOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--bg1);
  opacity: 0.7;
}
.app.sideNavOpened {
  transform: scale(0.9);
  -moz-transform: scale(0.9);
  pointer-events: none;
  opacity: 0.8;
}
.toggleTheme {
  display: inline-block;
  position: fixed;
  z-index: 1;
  right: 0px;
  top: 30%;
  cursor: pointer;
  border-radius: 20px 0px 0px 20px;
  padding: 20px;
  box-shadow: 0px 0px 3px 0px var(--shadowColor);
  font-size: 20px;
}
.toggleTheme:hover {
  padding-right: 30px;
}
</style>

<script>
export default {
  mounted() {
    if (!process.browser) return;

    const theme = localStorage.getItem("theme");
    if (theme == "dark") this.darkTheme = true;
    else this.darkTheme = false;

    window.onNuxtReady(app => {
      this.$eventBus.$on("openNav", () => {
        $("body").css("overflow", "hidden");
        this.sideNavOpened = true;
      });

      this.$eventBus.$on("closeSideNav", () => {
        $("body").css("overflow", "auto");
        this.sideNavOpened = false;
      });
    });
  },
  data() {
    return {
      darkTheme: false,
      sideNavOpened: false
    };
  },
  components: {
    Navbar: () => import("@/components/Navbar"),
    SideNav: () => import("@/components/SideNav"),
    Footer: () => import("@/components/Footer")
  },

  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;

      const theme = this.darkTheme ? "dark" : "light";
      localStorage.setItem("theme", theme);
    }
  }
};
</script>
