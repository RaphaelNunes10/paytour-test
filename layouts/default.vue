<template>
  <v-app dark>
    <default-header />
    <v-main>
      <spinner-loader v-if="spinner" />
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <default-footer />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import DefaultHeader from '../components/layout/default/Default-header.vue'
import SpinnerLoader from '../components/Spinner-loader.vue'
import DefaultFooter from '../components/layout/default/Default-footer.vue'
export default {
  name: 'DefaultLayout',
  components: { DefaultHeader, SpinnerLoader, DefaultFooter },
  computed: {
    ...mapState('Spinner', ['spinner']),
  },
  watch: {
    '$vuetify.theme.dark'() {
      if (process.client) {
        localStorage.setItem('darkMode', this.$vuetify.theme.dark)
      }
    },
  },
  mounted() {
    this.$vuetify.theme.dark = localStorage.getItem('darkMode') === 'true'
  },
}
</script>
