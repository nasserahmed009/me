<template>
  <div>
    <Navbar />
    <AppHeader />
    <!-- <Summary /> -->
    <MyProjects />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("@/components/Navbar.vue"),
    AppHeader: () => import("@/components/AppHeader.vue"),
    Summary: () => import("@/components/Summary.vue"),
    MyProjects: () => import("@/components/MyProjects.vue")
  }
};
</script>

<style></style>
