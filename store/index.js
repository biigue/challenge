import axios from 'axios'

export const state = () => ({
  name: '',
  email: '',
  id: '',
  token: '',
  loggedIn: false,
  password: '',
  places: '',
  review: []
})

export const getters = {
    isAuthenticated(state) {
      return state.loggedIn
    },
    userReview(state, {review}) {
      console.log(state)
      //return state.review
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
  addAvaliacao(state, av){
    if (av.reviewInfos.favorite ==="accepted"){
      state.review.push({
      msg: av.reviewInfos.msg,
      favorite: true,
      name: av.name,
      address: av.address,
      rating: av.rating
    })
    } 
    else{
      state.review.push({
        msg: av.reviewInfos.msg,
        favorite: false,
        name: av.name,
        address: av.address,
        rating: av.rating
    })
  }
},
  userLogin(state, user){
    state.loggedIn = true
  },
  edit(state, changes){
    state.email = changes.email,
    state.name = changes.name,
    state.password = changes.password
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
        this.$router.push('/home')
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
    
  },
  setAvaliacao({commit}, avaliacao){
    commit('addAvaliacao', {...avaliacao})
  },
  editUser({commit}, e){
    commit ('edit', e)
  }
  
}
