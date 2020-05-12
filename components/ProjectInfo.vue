<template>
  <div>
    <div class="projectDescription">
      <div class="container">
        <h2>Project description</h2>
        <hr />
        <p>{{ project.description }}</p>
      </div>
    </div>

    <div class="screenshots">
      <div class="container">
        <h2>Screenshots</h2>
        <hr />

        <div class="row">
          <div class="col-sm-12 col-md-3" v-for="index in 4" :key="index">
            <div class="screenshot">
              <img
                src="https://cms.qz.com/wp-content/uploads/2019/10/pensive-simian-qz-01.png?w=1600&h=900&crop=1&strip=all&quality=75"
                alt=""
              />
            </div>
          </div>
        </div>
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
.projectDescription {
  padding: 50px 25px;
}
.screenshots {
  padding: 50px 25px;
}
.screenshots img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.screenshot {
  width: 100%;
  height: 250px;
  background: red;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 30px;
}
</style>
