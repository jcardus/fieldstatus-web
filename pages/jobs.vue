<template>
  <v-data-table :items="jobs" :headers="headers">
  </v-data-table>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "jobs",
  data() {
    return {
      headers: [
        {text: 'id', value: 'id'}
      ]
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('bindJobs')
    } catch (e) {
      console.error(e)
    }
  },
  computed: {
    ...mapGetters(['jobs'])
  }
}
</script>
