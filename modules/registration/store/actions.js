import axios from 'axios'

const register = async function ({ commit }, newData) {
  this.dispatch('Spinner/setSpinner', true)

  await axios
    .post(`https://paytour-test-api.herokuapp.com/api/user/register`, newData)
    .then((res) => {
      commit('SET_REGISTRATIONERROR', '')
      return res.data
    })
    .catch((e) => {
      if (e.response.status === 500) {
        commit(
          'SET_REGISTRATIONERROR',
          `${e.response.status}: Algum campo foi deixado em branco.`
        )
      } else {
        commit(
          'SET_REGISTRATIONERROR',
          `${e.response.status}: ${e.response.data.message} Erro no servidor.`
        )
      }
    })
    .finally(() => {
      this.dispatch('Spinner/setSpinner', false)
    })
}

const clearRegistration = function ({ commit }) {
  commit('SET_REGISTRATION', null)
  commit('SET_REGISTRATIONERROR', null)
}

export default {
  register,
  clearRegistration,
}
