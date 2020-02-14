<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">

          <h2 class="title has-text-centered">Register!</h2>

          <form id="app" @submit="checkForm" method="post">

            
            <div class="field">
              <label class="label">Nome</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="nome"
                  v-model="user.name"
                  required
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="user.email"
                  required
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Senha</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="user.password"
                  required
                >
              </div>
            </div>
            
            <div class="field">
              <label class="label">Confirmar</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="confirmar"
                  v-model="user.password2"
                  required
                >
              </div>
            </div>

            <div class="control">
              <button @click="submit()"  class="registerbtn">Enviar</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, minLengt, email } from 'vuelidate/lib/validators';

export default {
  components: {
  },

  data: ()  => ({
    user: {
      name: '',
      email: '',
      password: '',
      password2: ''
      }
  }),



  methods: {
     ...mapActions({
       userRegister: 'USER_REGISTER'
    }),
    checkForm(){
      if (this.user.password != this.user.password2){
        alert("Senhas não coincidem. Tente novamente.")
      }
      else{
        this.userRegister(this.user)
      }
    },
    // async register() {
    //   try {
    //     await this.$axios.post('register', {
    //       email: 'eve.holt@reqres.in',
    //       password: this.user.password
    //     })
    //     this.$router.push('/')
    //   } catch (e) {
    //     this.error = e.response.data.message
    //   }
    // }
  }
}
</script>
