<template>
  <div class="contactMe">
    <div class="container">
      <div class="flex title">
        <h1 class="no-margin bold icon">☎️</h1>
        <div class="text">
          <h1 class="no-margin bold ">Get In Touch</h1>
          <span class="textColor1">It would be great to hear from you</span>
        </div>
      </div>

      <hr />

      <div class="row">
        <!-- social media accounts -->
        <div class="col-sm-12 col-md-5 socialAccounts">
          <div>
            <font-awesome-icon
              :icon="['fas', 'envelope-open']"
              class="textColor1"
            />
            <a href="mailto:anasserabdrabo@gmail.com" target="_blank"
              >anasserabdrabo@gmail.com</a
            >
          </div>
          <div>
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              style="color: #0e76a8"
            />
            <a
              href="https://www.linkedin.com/in/nasserahmed009/"
              target="_blank"
              >/nasserahmed009</a
            >
          </div>
          <div>
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              style="color: #00acee"
            />
            <a href="https://twitter.com/nasser_ahmed009" target="_blank"
              >/nasser_ahmed009</a
            >
          </div>
          <div>
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              style="color: #3b5998"
            />
            <a href="https://www.facebook.com/anasserabdrabo" target="_blank"
              >/anasserabdrabo</a
            >
          </div>
          <div>
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              style="color: #c32aa3"
            />
            <a href="https://www.instagram.com/nasser_ahmed009/" target="_blank"
              >/nasser_ahmed009</a
            >
          </div>
          <div>
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              style="color: #f46e31"
            />
            <a
              href="https://www.instagram.com/randomshotsandthoughtss/"
              target="_blank"
              >/randomshotsandthoughtss</a
            >
          </div>
        </div>

        <div class="col-sm-12 col-md-7">
          <!-- Send message form -->
          <form @submit.prevent="sendMessage" v-if="!messageSent">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message .."
              ></textarea>
            </div>

            <button type="submit" class="buttonMain shadow">
              Send Message
            </button>
          </form>

          <!-- message that appear on sending an email -->
          <div v-else class="text-center messageSentBox">
            <div class="iconContainer">
              <font-awesome-icon :icon="['fas', 'check']" />
            </div>
            <p class="textColor3">
              Thanks, your message has been recieved successfuly.
              <br />
              <span class="textColor1">I'll contact you soon</span>
            </p>
            <a
              href="/"
              class="buttonMain shadow"
              @click.prevent="messageSent = false"
              >Send another message</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageSent: true
    };
  },
  methods: {
    sendMessage() {
      this.messageSent = true;
    }
  }
};
</script>

<style scoped>
.title .text {
  margin-left: 15px;
}
.contactMe {
  padding: 50px 25px;
}
.socialAccounts div {
  margin: 10px 0px;
}
.socialAccounts {
  font-size: 20px;
}
.socialAccounts a {
  font-size: 18px;
  margin-left: 15px;
}
.socialAccounts a:hover {
  margin-left: 20px;
}
input,
textarea {
  padding: 25px;
}
textarea {
  resize: vertical;
  min-height: 150px;
}
.messageSentBox {
  padding: 40px 25px;
  background: var(--bg3);
}
.iconContainer {
  width: 60px;
  height: 60px;
  margin: 0 auto 30px auto;
  text-align: center;
  line-height: 57px !important;
  border-radius: 50%;
  border: 3px solid #2ecc71;
  color: #2ecc71;
  font-size: 20px;
}
/* p{
    font-s
} */
</style>
