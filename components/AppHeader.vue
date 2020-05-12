<template>
  <div class="appHeader">
    <div class="container appHeaderContainer">
      <div class="info">
        <h1 class="textColor1 bold">🙋‍♂️ Hello, I'm Nasser</h1>
        <h4 class="textColor2">
          Sunrise chaser with a head full of dreams who enjoys crafting ui
          designs and coding.
        </h4>
        <a
          href="#projects"
          class="buttonMain shadow bold"
          @click.prevent="$eventBus.$emit('goToSection', '#projects')"
          >Take a look at my projects !</a
        >
      </div>

      <img src="@/assets/images/me.png" alt="me" class="me" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.appHeader {
  min-height: calc(100vh - 100px);
  padding: 50px 25px;
  background: var(--bg1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.appHeaderContainer {
  display: flex;
  align-items: center;
  max-width: 100%;
}
img.me {
  max-width: 50%;
}
@media (max-width: 720px) {
  .appHeaderContainer {
    flex-direction: column;
  }
  .info {
    text-align: center;
  }
  img.me {
    max-width: 400px;
  }
}
</style>
