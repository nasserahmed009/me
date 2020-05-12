<template>
  <div class="appHeader">
    <div class="container appHeaderContainer">
      <div class="info">
        <h1 class="textColor3 bold">Hello, I'm Nasser</h1>
        <h4 class="textColor1">
          Sunrise chaser with a head full of dreams who enjoys crafting ui
          designs and coding.
        </h4>
        <a href="#" class="buttonMain shadow bold"
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
  padding: 50px 25px;
  background: var(--bg3);
}
.appHeaderContainer {
  display: flex;
  align-items: center;
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
