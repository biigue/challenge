import axios from 'axios'

export const state = () => ({
  name: '',
  email: '',
  id: '',
  token: '',
  loggedIn: false,
  password: '',
})

export const getters = {
    isAuthenticated(state) {
      return state.loggedIn
    },
    emailStorage(){
      return state.email
    }
  }

export const mutations = {
  addUser (state, user){
    state.name = user.name
    state.email = user.email
    state.id = user.id
    state.token = user.token
    state.loggedIn = true
    state.email = user.email
    state.password = user.password
  },
  userLogin(state, user){
    state.loggedIn = true
  }
}

export const actions = {
  async userRegister({commit}, user) {
    const register = {
      email: 'eve.holt@reqres.in',
      password: user.password,
    }
    await axios
      .post('https://reqres.in/api/register/', register)
      .then(res => {
        commit('addUser', { ...user, id: res.data.id, token: res.data.token})
        this.$router.push('/')
      })
      .catch(err => console.log(err))
  },

  async login({commit}, user) {
    if (this.state.email === user.email & this.state.password === user.password){
      const login = {
      email: 'eve.holt@reqres.in',
      password: user.password,
    }
    await axios
      .post('https://reqres.in/api/login/', login)
      .then(res => {
        commit('addUser', { ...user, id: res.data.id, token: res.data.token})
        this.$router.push('/home')
      })
      .catch(err => console.log(err))
    } else{
      alert('Email ou senha incorretos')
    }
    
  }
  
}
