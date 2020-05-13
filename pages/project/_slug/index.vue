<template>
  <div class="singleProjectView">
    <div v-if="project">
      <div class="projectHeader text-center">
        <div class="info">
          <h1 class="textColor3 bold no-margin textColor1">
            {{ project.name }}
          </h1>
          <p class="textColor2">{{ project.slogan }}</p>
          <a :href="project.link" class="buttonMain shadow" target="_blank">
            view project
          </a>
        </div>
      </div>

      <ProjectInfo :project="project" />
    </div>

    <div class="noProject" v-else>
      <div class="container text-center">
        <font-awesome-icon
          :icon="['fas', 'ghost']"
          style="color: #3498db; font-size: 100px"
        />
        <h1 class="textColor1">Are you lost ?</h1>
        <p class="textColor2">Sorry, we couldn't find this project</p>
        <a href="/" class="buttonMain">Back to the home page</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    project() {
      const slug = this.$route.params.slug;
      return this.$store.getters["projects/project"](slug);
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
  background: var(--bg1);
}
.noProject {
  min-height: calc(100vh - 100px - 95px);
  background: var(--bg1);
  padding: 100px 25px;
}
</style>
