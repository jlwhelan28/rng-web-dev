<template>
  <div>
    Placeholder detailed page for: {{ $route.params.gametitle }}
    <div v-if="info">
      {{ info.status }}
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import GameData from "@/assets/json/GameData.json"
export default {
  created () {
    this.fetchData()
  },
  data: () => ({
    info: null,
    error: null,
  }),
  props: [
  ],
  methods: {
    fetchData() {
      this.info = GameData.find(el => el.url === this.$route.params.gametitle)
      if (this.info === undefined) {
        this.error = "404"
      }
    }
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>
