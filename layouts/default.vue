<template>
  <v-app :dark="dark">
    <v-container>
      <nuxt />
    </v-container>
    <div class="comment">
      <vue-disqus shortname="nickname-generator"></vue-disqus>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dark: false
    };
  },
  created() {
    const hr = new Date().getHours();
    if (hr >= 19 || hr <= 6) {
      this.$vuetify.theme.dark = true;
      this.dark = true;
    }
  }
};
</script>
<style scoped>
.container {
  font-family: Noto Serif KR;
}
.comment {
  max-width: 600px;
  margin: 4rem auto;
  width: 90%;
}
</style>
