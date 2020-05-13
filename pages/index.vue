<template>
  <div>
    <AppHeader />
    <!-- <Summary /> -->
    <MyProjects id="projects" />
    <ContactMe id="contact" />
  </div>
</template>

<script>
export default {
  mounted() {
    window.onNuxtReady(app => {
      const hash = this.$route.hash;

      if (hash.trim()) {
        this.goToSection(hash);
      }

      // go to the requested section whenever this event is called
      this.$eventBus.$on("goToSection", this.goToSection);
    });
  },
  components: {
    AppHeader: () => import("@/components/AppHeader.vue"),
    Summary: () => import("@/components/Summary.vue"),
    MyProjects: () => import("@/components/MyProjects.vue"),
    ContactMe: () => import("@/components/ContactMe.vue")
  },
  methods: {
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

<style></style>
