<template>
  <div class="myProjects">
    <div class="container">
      <h1 class="textColor3 text-center bold">👨‍💻 My Projects</h1>

      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4"><SingleProject /></div>
        <div class="col-sm-12 col-md-6 col-lg-4"><SingleProject /></div>
        <div class="col-sm-12 col-md-6 col-lg-4"><SingleProject /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SingleProject: () => import("@/components/SingleProject")
  }
};
</script>

<style scoped>
.myProjects {
  padding: 50px 25px;
  background: var(--bg2);
}
h1 {
  margin-bottom: 20px;
}
</style>
