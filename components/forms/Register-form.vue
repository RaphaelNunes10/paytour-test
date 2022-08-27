<template>
  <v-container grid-list-xs>
    <v-row justify="center">
      <v-col align="center">
        <v-card>
          <v-toolbar flat dense>
            <v-spacer />
            <v-toolbar-title>Cadastrar Curriculum</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-container class="py-5">
            <v-form ref="form" lazy-validation>
              <v-text-field
                v-model="newData.nome"
                label="Nome *"
                :rules="[rules.required, rules.counter]"
                @keyup.enter="checkAndRegister()"
              />
              <v-text-field
                v-model="newData.email"
                label="Email *"
                :rules="[rules.required, rules.email]"
                @keyup.enter="checkAndRegister()"
              />
              <v-text-field
                v-model="newData.telefone"
                v-mask="['(##) #####-####', '(##) ####-####']"
                type="tel"
                label="Telefone *"
                :rules="[rules.required]"
                @keyup.enter="checkAndRegister()"
              />
              <v-text-field
                v-model="newData.cargo"
                label="Cargo Desejado *"
                :rules="[rules.required]"
                @keyup.enter="checkAndRegister()"
              />
              <p />
              <v-select
                v-model="newData.escolaridade"
                label="Escolaridade *"
                :items="escolaridade.items"
                item-text="text"
                item-value="text"
                :rules="[rules.required]"
                outlined
                return-object
                @keyup.enter="checkAndRegister()"
              />
              <v-textarea
                v-model="newData.obs"
                label="Observações"
                outlined
                @keyup.enter="checkAndRegister()"
              />
              <v-file-input
                v-model="newData.arquivo"
                accept=".doc, .docx, .pdf"
                truncate-length="15"
                label="Curriculum"
                :rules="[rules.maxSize]"
                filled
                dense
              />
              <v-row v-if="registerError" justify="center">
                <v-col cols="9">
                  <v-alert outlined type="error">
                    {{ registerError }}
                  </v-alert>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-toolbar flat>
            <v-toolbar-items>
              <v-btn text @click="registerDialog = false">Cancelar</v-btn>
            </v-toolbar-items>
            <v-spacer />
            <v-toolbar-items>
              <v-btn text @click="checkAndRegister()">Cadastrar</v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      registerDialog: false,

      newData: {
        nome: '',
        email: '',
        telefone: '',
        cargo: '',
        escolaridade: '',
        obs: '',
        arquivo: '',
      },

      escolaridade: {
        items: [
          { text: 'Fundamental' },
          { text: 'Médio' },
          { text: 'Superior' },
          { text: 'Pós-graduação' },
          { text: 'Mestrado' },
          { text: 'Doutorado' },
        ],
      },

      registerError: null,

      isEmailValid: false,

      rules: {
        required: (value) => !!value || 'Obrigatório.',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Email inválido.'
        },
        maxSize: (value) =>
          !value ||
          value.size <= 1000000 ||
          'O arquivo excede o tamanho máximo de 1 MB.',
      },
    }
  },
  computed: {
    ...mapState('Register', ['data']),
  },
  watch: {
    'newData.email'() {
      this.newData.email = this.newData.email.toLowerCase()
      if (this.rules.email(this.newData.email) === true) {
        this.isEmailValid = true
      } else {
        this.isEmailValid = false
      }
    },
    'newData.telefone'() {
      this.newData.telefone = this.newData.telefone.replace(/\D/g, '')
    },
  },
  methods: {
    ...mapActions('Registration', ['register']),
    checkAndRegister() {
      if (this.isEmailValid) {
        this.registerError = ''
        this.register(this.newData)
      } else {
        this.registerError = 'Email inválido.'
      }
    },
  },
}
</script>
