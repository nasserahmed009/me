<template>
  <div>
    <Navbar />
    <AppHeader />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
    AppHeader: () => import("@/components/AppHeader.vue")
  }
};
</script>

<style></style>
