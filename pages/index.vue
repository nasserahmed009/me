<template>
  <div>
    <AppHeader />
    <!-- <Summary /> -->
    <MyProjects />
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import("@/components/AppHeader.vue"),
    Summary: () => import("@/components/Summary.vue"),
    MyProjects: () => import("@/components/MyProjects.vue")
  }
};
</script>

<style></style>
