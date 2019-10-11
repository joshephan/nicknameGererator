<template>
  <v-app :dark="dark">
    <v-content fluid fill-height>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="true"
      app
    >
      <v-container fluid class="text-right">만든이: <a href="https://brunch.co.kr/@skykamja24">상훈</a></v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  created() {
    const hr = (new Date()).getHours();
    if(hr >= 19 || hr <= 6) {
      this.$vuetify.theme.dark = true;
      this.dark = true;
    }
  }
}
</script>
