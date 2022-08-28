import axios from 'axios'

const register = async function ({ commit }, newData) {
  this.dispatch('Spinner/setSpinner', true)

  const head = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length',
  }

  await axios
    .post(
      `https://paytour-test-j5e5ky8f7-raphaelnunes10.vercel.app/api/curriculum/register`,
      newData,
      {
        withCredentials: true,
        headers: head,
      }
    )
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
