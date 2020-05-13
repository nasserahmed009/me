<template>
  <div class="error">
    <div class="container text-center" v-if="error.statusCode === 404">
      <font-awesome-icon
        :icon="['fas', 'ghost']"
        style="color: #3498db; font-size: 100px"
      />
      <h1 class="textColor1">Are you lost ?</h1>
      <p class="textColor2">Sorry, we couldn't find this page</p>
      <a href="/" class="buttonMain">Back to the home page</a>
    </div>

    <div class="container text-center" v-else>
      <font-awesome-icon
        :icon="['fas', 'bomb']"
        style="color: #3498db; font-size: 100px"
      />
      <h1 class="textColor1">It appears like there's an error ?</h1>
      <p class="textColor2">
        Sorry for the inconvenience, Please try again late
      </p>
      <a href="/" class="buttonMain">Back to the home page</a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Opps."
    };
  },
  props: ["error"]
};
</script>

<style scoped>
.error {
  min-height: calc(100vh - 100px - 95px);
  background: var(--bg1);
  padding: 100px 25px;
}
</style>
