<template>
  <v-hover open-delay=80 close-delay=100 v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 20 : 2"
    :class="{ 'on-hover': hover }"
    >
      <v-img :src="art" :key="id" class="fill-height">
        <div class="align-self-center">
          <v-btn
            :class="{ 'show-btns': 'hover'}"
            color="transparent"
            icon
            link
            :to="url"
          >
            <v-icon
              :class="{ 'show-btns': hover }"
              size=40
              color="transparent"
            >
            mdi-play
            </v-icon>
        </v-btn>
          <v-btn
            :class="{ 'show-btns': 'hover'}"
            color="transparent"
            icon
            link
            :to="docsurl"
          >
            <v-icon
              :class="{ 'show-btns': hover }"
              size=40
              color="transparent"
            >
            mdi-file-document
            </v-icon>
          </v-btn>
        </div>
      </v-img>
    </v-card>
  </v-hover>
</template>

<style scoped>

.v-card {
    transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.5;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<script>
export default {
  props: [
    "id",
    'title',
    'status',
    'art',
    'url',
    'docsurl',
  ],
  data: () => ({
    transparent: 'rgba(255, 255, 255, 0)',
  })
}
</script>
