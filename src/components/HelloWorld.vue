<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/rngbanner2.jpg')"
          class="my-3"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Roll Initiative
        </h1>
        <p class="subheading font-weight-regular">
          A PvP focused guild and gaming community with a competitive focus, without the toxcicity of hardcore guilds
          <br>Join our
          <a href="http://rngdiscord.tk" target="_blank">Discord Community</a>
        </p>
      </v-flex>
    </v-layout>
  <Games/>
  </v-container>
</template>

<script>
import Games from "./GameDescription.vue"

export default {
  components: {
      Games,
  },
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
  }),
};
</script>
