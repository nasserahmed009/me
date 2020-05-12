<template>
  <div>
    <Navbar />
    <AppHeader />
    <Summary />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
    AppHeader: () => import("@/components/AppHeader.vue"),
    Summary: () => import("@/components/Summary.vue")
  }
};
</script>

<style></style>
