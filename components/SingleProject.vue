<template>
  <div class="singleProject shadow">
    <img
      src="https://www.istockphoto.com/resources/images/IllustrationsLanding/Emotions-1174870662.jpg"
      alt="project image"
    />
    <div class="projectInfo text-center">
      <div class="projectInfoContainer">
        <h2 class="textColor1">{{ project.name }}</h2>
        <p class="textColor2">{{ project.description.slice(0, 60) }}</p>
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
  height: 250px;
  background: red;
  border-radius: 40px;
  overflow: hidden;
  cursor: pointer;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.projectInfo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
}
.projectInfoContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
}
</style>
