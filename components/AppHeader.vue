<template>
  <div class="appHeader">
    <div class="container appHeaderContainer">
      <div class="info">
        <h1 class="grey3Text">Hello, I'm Nasser</h1>
        <h4 class="grey1Text">
          Sunrise chaser with a head full of dreams who enjoys crafting ui
          designs and coding.
        </h4>
        <a href="#" class="buttonMain shadow">Take a look at my projects !</a>
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
  padding: 50px 0px;
  background: var(--bg);
}
.appHeaderContainer {
  display: flex;
  align-items: center;
}
img.me {
  max-width: 40%;
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
