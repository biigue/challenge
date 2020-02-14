export const state = () => {

}
export const getters = {
    isAuthenticated(state) {
      return state.loggedIn
    },
  }

export const actions = {
  USER_REGISTER ({commit}, dados){
    console.log(commit)
    console.log(dados)
  },
}
