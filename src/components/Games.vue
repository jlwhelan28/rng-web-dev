<template>
  <div>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="(game, i) in games" class="d-flex child-flex">
        <GameCard
        v-bind:id="i"
        v-bind:title="game.title"
        v-bind:status="game.status"
        v-bind:url="game.url"
        v-bind:docsurl="game.docsurl"
        v-bind:art="game.art"
        />
      </v-col>
  </v-row>
  </v-container>
  </div>
</template>

<script>
import GameData from "@/assets/json/GameData.json"
import GameCard from "./GameCard.vue"
export default {
  components: {
    GameCard
  },
  data: () => ({
    games: GameData,
    // games: [
    //   {
    //     "title": "Archeage Unchained",
    //     //"banner": require("@assets/archeage_unchained_banner.jpg"),
    //     "art": require("@/assets/archeage_unchained_art.jpg"),
    //     "desc": "we will be playing this",
    //     "status": "Active",
    //     "url": "./archeage-unchained",
    //     "docsurl": "./",
    //   },
    //   {
    //     "title": "Elder Scrolls Online",
    //     "banner": "./assets/eso_banner.jpg",
    //     "art": require("@/assets/eso_art.jpg"),
    //     "desc": "we played this",
    //     "status": "Semi-Active",
    //     "url": "./",
    //     "docsurl": "./",
    //   },
    //   {
    //     "title": "Guild Wars 2",
    //     "banner": "./assets/gw2_banner.jpg",
    //     "art": require("@/assets/gw2_art.jpg"),
    //     "desc": "we played this",
    //     "status": "Archives",
    //     "url": "./",
    //     "docsurl": "./",
    //   },
    //   {
    //     "title": "Archeage",
    //     "banner": "./assets/archeage_banner.jpg",
    //     "art": require("@/assets/archeage_art.jpg"),
    //     "desc": "we played this",
    //     "status": "Archives",
    //     "url": "./",
    //     "docsurl": "./",
    //   },
    //   {
    //     "title": "Star Citizen",
    //     "banner": "",
    //     "art": require("@/assets/star_citizen_art.jpg"),
    //     "status": "Future",
    //     "url": "./",
    //     "docsurl": "./",
    //   },
    //   {
    //     "title": "Camelot Unchained",
    //     "art": require("@/assets/cu_art.jpg"),
    //     "status": "Future",
    //     "url": "./",
    //     "docsurl": "./",
    //   },
    // ]
  })
}
</script>
