<template>
  <div :class="{ darkTheme: darkTheme, lightTheme: !darkTheme }">
    <div class="toggleTheme" @click="darkTheme = !darkTheme">
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
</template>

<style scoped>
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
.darkTheme {
  background: var(--bg);
}
</style>

<script>
export default {
  data() {
    return {
      darkTheme: false
    };
  },
  components: {
    Navbar: () => import("@/components/Navbar"),
    Footer: () => import("@/components/Footer")
  }
};
</script>
