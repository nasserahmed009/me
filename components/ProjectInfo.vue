<template>
  <div class="projectInfo">
    <div class="projectDescription">
      <div class="container">
        <h2 class="textColor1">Project description</h2>
        <hr />
        <p class="textColor2">{{ project.description }}</p>
      </div>
    </div>

    <div class="screenshots">
      <div class="container">
        <h2 class="textColor1">Screenshots</h2>
        <hr />

        <div class="row">
          <div
            class="col-sm-12 col-md-3"
            v-for="(screenshot, index) in project.screenshots"
            :key="index"
            @click="showLightBox(index)"
          >
            <div class="screenshot">
              <img :src="screenshot" :alt="project.name" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- light box to show when image is clicked -->
    <div
      class="imageLightBox text-center"
      v-if="screenshotToShow != null"
      @click="handleClick"
    >
      <!-- close button -->
      <div class="iconContainer" @click="hideLightBox">
        <font-awesome-icon :icon="['fas', 'times']" />
      </div>

      <img
        :src="project.screenshots[screenshotToShow]"
        :alt="project.name"
        class="shadow"
      />
      <div class="arrowsContainer flex" style="">
        <div class="iconContainer leftArrow">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </div>

        <div class="iconContainer rightArrow">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // index of the screenshot to show
      screenshotToShow: null
    };
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick(e) {
      const isImg = $(e.target).is("img");
      const isRightArrow =
        $(".rightArrow").has(e.target).length > 0 ||
        $(e.target).is(".rightArrow");
      const isLeftArrow =
        $(".leftArrow").has(e.target).length > 0 ||
        $(e.target).is(".leftArrow");

      if (!isImg && !isLeftArrow && !isRightArrow) return this.hideLightBox();

      if (isRightArrow) return this.nextScreenshot();
      if (isLeftArrow) return this.prevScreenshot();
    },
    showLightBox(screenshotIndex) {
      $("body").css("overflow", "hidden");
      this.screenshotToShow = screenshotIndex;
    },
    hideLightBox() {
      $("body").css("overflow", "auto");
      this.screenshotToShow = null;
    },
    nextScreenshot() {
      // if the current screen shot is the last one
      if (this.screenshotToShow === this.project.screenshots.length - 1)
        this.screenshotToShow = 0;
      else this.screenshotToShow++;
    },
    prevScreenshot() {
      // if the current screen shot is the first one
      if (this.screenshotToShow === 0)
        this.screenshotToShow = this.project.screenshots.length - 1;
      else this.screenshotToShow--;
    }
  }
};
</script>

<style scoped>
.projectInfo {
  background: var(--bg2);
}
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
  background: var(--bg1);
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 30px;
}
.imageLightBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 21;
  padding: 40px 25px;
}
.iconContainer {
  width: 60px;
  height: 60px;
  margin: 0 auto 30px auto;
  text-align: center;
  line-height: 57px !important;
  border-radius: 50%;
  border: 3px solid #fff;
  color: #fff;
  opacity: 0.8;
  font-size: 20px;
  cursor: pointer;
}
.imageLightBox img {
  max-width: 90%;
  max-height: 80%;
}
.arrowsContainer {
  max-width: 60%;
  margin: 30px auto;
}
</style>
