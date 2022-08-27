<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <register-form />
    </v-col>
  </v-row>
</template>

<script>
import RegisterForm from '../components/forms/Register-form.vue'
export default {
  name: 'IndexPage',
  components: { RegisterForm },
}
</script>
