import Vue from 'vue'
import Vuex from 'vuex'

import Spinner from '@/modules/spinner'
import Registration from '@/modules/registration'

Vue.use(Vuex)

const modules = {
  Spinner,
  Registration,
}

export default () =>
  // eslint-disable-next-line import/no-named-as-default-member
  new Vuex.Store({
    modules,
  })
