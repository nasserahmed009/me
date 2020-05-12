<template>
  <div :class="{ darkTheme: darkTheme, lightTheme: !darkTheme }">
    <SideNav :opened="sideNavOpened" />

    <div
      class="app shadow"
      :class="{
        sideNavOpened: sideNavOpened,
        blur: sideNavOpened && !isFireFox
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
}
.app.sideNavOpened {
  transform: scale(0.9);
  -moz-transform: scale(0.9);
  pointer-events: none;
  opacity: 0.8;
}
.blur {
  filter: blur(2px);
  -webkit-filter: blur(2px);
  -moz-filter: blur(2px);
  -o-filter: blur(2px);
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
    // check if the route contains hash and go to this hash
    const theme = localStorage.getItem("theme");
    if (theme == "dark") this.darkTheme = true;
    else this.darkTheme = false;

    if (process.browser) {
      window.onNuxtReady(app => {
        const hash = this.$route.hash;

        if (hash.trim()) {
          this.goToSection(hash);
        }

        // go to the requested section whenever this event is called
        this.$eventBus.$on("goToSection", this.goToSection);

        //
        this.$eventBus.$on("openNav", () => {
          $("body").css("overflow", "hidden");
          this.sideNavOpened = true;
        });

        this.$eventBus.$on("closeSideNav", () => {
          $("body").css("overflow", "auto");
          this.sideNavOpened = false;
        });
      });
    }
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
  computed: {
    // filter blur is laggy on firefox so i don't add it if the useragent is firefox
    isFireFox() {
      return navigator.userAgent.toLowerCase().includes("firefox");
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;

      const theme = this.darkTheme ? "dark" : "light";
      localStorage.setItem("theme", theme);
    },
    goToSection(hash) {
      // if this hash isn't found on the page
      if (!$(hash)) return;
      const scrollTop = $(hash).offset().top;
      $("html").animate(
        {
          scrollTop
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  }
};
</script>
