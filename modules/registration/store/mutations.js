const SET_REGISTRATION = (state, obj) => {
  state.registration = obj
}

const SET_REGISTRATIONERROR = (state, obj) => {
  state.error = obj
}

export default {
  SET_REGISTRATION,
  SET_REGISTRATIONERROR,
}
