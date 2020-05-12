<template>
  <div class="singleProjectView">
    <div class="projectHeader text-center">
      <div class="info">
        <h1 class="textColor3 bold no-margin">{{ project.name }}</h1>
        <p class="textColor1">{{ project.slogan }}</p>
        <a :href="project.link" class="buttonMain shadow" target="_blank">
          view project
        </a>
      </div>
    </div>

    <ProjectInfo :project="project" />

    <div class="text-center">
      <a href="" class="buttonMain">back to the home page</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    project() {
      const projectId = this.$route.params.id;
      return this.$store.getters["projects/project"](projectId);
    }
  },
  components: {
    ProjectInfo: () => import("@/components/ProjectInfo")
  }
};
</script>

<style scoped>
.projectHeader {
  position: relative;
  padding: 100px 25px;
  background: var(--bg3);
}
</style>
