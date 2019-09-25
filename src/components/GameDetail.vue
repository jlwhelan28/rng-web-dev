<template>
  <div>
    <v-container v-if="info">
      <v-layout align-center>
        <v-flex text-center>
          <h1 class="display-2 primary--text">{{info.title}}</h1>
          <h2 class="display-2 secondary--text">Current Status: {{ info.status }}</h2>
        </v-flex>
      </v-layout>
      <v-row>
        <v-col cols=6>
          <v-card tile class="mx-auto">
            <v-toolbar color="indigo" dark>
              <v-toolbar-title>Media from {{ info.title }}</v-toolbar-title>
            </v-toolbar>
            <v-list v-if="videos" two-line>
              <div v-for="(item, index) in videos" :key="index">
                <v-list-item :href="info.media[index].url">
                  <v-list-item-avatar>
                    <v-img :src="item.snippet.thumbnails.high.url"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.snippet.title"/>
                    <v-list-item-subtitle class="text--primary" v-text="item.snippet.description"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider v-if="index + 1 < videos.length"/>
              </div>
            </v-list>
            <h1 v-else class="display-2 secondary--text">No media available (yet!)</h1>
          </v-card>
        </v-col>
        <v-col cols=6>
          <v-list v-if="info.documents">
            <v-list-item v-for="(document, index) in info.documents">
              <v-list-item-content>
                <v-list-item-title v-text="document.title"/>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <h1 v-else class="display-2 secondary--text">No public documents (yet!)</h1>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="error">
      {{ error }}
    </div>
  </div>

</template>

<script>
import GameData from "@/assets/json/GameData.json"

const axios = require('axios');
export default {
  created () {
    this.fetchData()
  },
  data: () => ({
    info: null,
    error: null,
    videos: null,
  }),
  props: [
  ],
  methods: {
    fetchData() {
      this.info = GameData.find(el => el.url === this.$route.params.gametitle)
      if (this.info === undefined) {
        this.error = "404"
      }
    },
    fetchVideoData() {
      if (this.info) {
        let idlist = ""
        for (let item of this.info.media) {
          idlist = idlist + "," + item.url.split("?v=")[1].split("&")[0]
        }
      axios.get("https://www.googleapis.com/youtube/v3/videos", {
        "params": {
          "part": "snippet",
          "id": idlist,
          "key": this.$YOUTUBE_API_KEY,
        }
      }).then((response) => {
        console.log(response)
        this.videos = response.data.items
      }).catch((error) => {
        console.log(error)
      })
      }
    }
  },
  mounted () {
    this.fetchVideoData()
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>
