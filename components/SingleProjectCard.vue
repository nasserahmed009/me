<template>
  <div class="singleProject shadow">
    <img :src="project.thumbnail" :alt="project.name" />
    <div class="projectInfo text-center">
      <div class="projectInfoContainer">
        <h2>{{ project.name }}</h2>
        <p>{{ project.slogan }}</p>
        <a :href="'/project/' + project.id" class="buttonMain shadow"
          >More info</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.singleProject {
  width: 100%;
  padding-top: 75%; /* 1:1 Aspect Ratio */
  height: 250px;
  background: red;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
}

.singleProject:hover img {
  transform: scale(1.1);
}

.singleProject:hover .projectInfo {
  opacity: 1;
}

img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2,
p {
  color: #fff;
}

p {
  font-size: 15px;
}
.projectInfo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
}
.projectInfoContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}
.buttonMain:hover {
  background: #fff;
}
</style>
