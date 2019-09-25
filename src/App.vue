<template>
  <v-app>
    <v-card
    flat
    height="50px"
    >
      <v-app-bar dense height="50px">

        <v-btn icon @click.stop="drawer = !drawer">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
        <v-toolbar-title class="headline text-uppercase">
          <span>Navigation</span>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn text to="/" exact>
          <v-toolbar-title class="headline text-uppercase">Roll Initiative</v-toolbar-title>
        </v-btn>
        <div class="flex-grow-1"></div>
        <v-btn
          text
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >Latest ReleasE
        </v-btn>
      </v-app-bar>
    </v-card>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list>
      <v-list-item href="http://rngdiscord.tk">
        <v-list-item-title class="title">Discord
          <v-icon>mdi-discord</v-icon>
        </v-list-item-title>
      </v-list-item>
      <v-divider/>
      <v-list-item
        v-for="(item, i) in views"
        :key="i"
        link
        :to="item.path"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-content>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    drawer: null,
    views: [
      {
        title: "Home",
        path: './',
      },
      {
        title: 'About Us',
        path: './about',
      },
      {
        title: 'Media',
        path: './media',
      },
    ]
    //
  }),
};
</script>
