<template>
  <div>
    <AppHeader />
    <!-- <Summary /> -->
    <MyProjects />
    <ContactMe />
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import("@/components/AppHeader.vue"),
    Summary: () => import("@/components/Summary.vue"),
    MyProjects: () => import("@/components/MyProjects.vue"),
    ContactMe: () => import("@/components/ContactMe.vue")
  }
};
</script>

<style></style>
