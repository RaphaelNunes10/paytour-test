<template>
  <div>
    <v-app-bar>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-switch
        v-model="$vuetify.theme.dark"
        class="dark-mode-switch"
        inset
        hide-details
        prepend-icon="mdi-white-balance-sunny"
        append-icon="mdi-moon-waning-crescent"
      ></v-switch>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      rightDrawer: false,
      title: 'Cadastro de Curriculum',
    }
  },
}
</script>

<style>
.dark-mode-switch
  > .v-input__control
  > .v-input__slot
  > .v-input--selection-controls__input {
  margin-right: 0 !important;
}

.dark-mode-switch > .v-input__append-outer {
  margin-left: 0 !important;
}
</style>
