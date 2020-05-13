<template>
  <div class="myProjects">
    <div class="container">
      <div class="flex title">
        <h1 class="no-margin bold icon">👨‍💻</h1>
        <div class="text">
          <h1 class="no-margin bold textColor1">Featured Projects</h1>
          <p class="textColor2">Take a look at some of my projects</p>
        </div>
      </div>

      <hr />

      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-4"
          v-for="project in projects"
          :key="project.id"
        >
          <SingleProjectCard :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    }
  },
  components: {
    SingleProjectCard: () => import("@/components/SingleProjectCard")
  }
};
</script>

<style scoped>
.title .text {
  margin-left: 15px;
}
.myProjects {
  padding: 50px 25px;
  background: var(--bg2);
}
h1 {
  margin-bottom: 20px;
}
</style>
