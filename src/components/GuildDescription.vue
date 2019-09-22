<template>
  <v-container>
    <v-card>
      <p>
        Roll Initiative is a competitive PvP guild that seeks to raise the bar in team PvP for every game we play. Our members have years of diverse MMO experience dating back to EQ/UO/Eve/DAoC, and a majority earned our competitive mentality as part of dedicated WvW guilds in Guild Wars 2. The core members of this group have been playing together for 5+ years, and the majority of the guild is in North America though we do have a few OCX members.
        We are activley looking for new members that share our mentality and are looking for a smaller team focused group to play with. Our rules are simple:
        <v-list>
          <v-list-item>No intolerance of race, gender, or sexual orientation</v-list-item>
          <v-list-item>No excessive harassment of any members</v-list-item>
        </v-list>
      </p>
    </v-card>
    <v-card>
      <GameDescription/>
    </v-card>
  </v-container>
</template>

<script>
import Games from "./Games.vue"
export default {
  data: () => ({
    components: {
      Games,
    }
  }),
};
</script>
