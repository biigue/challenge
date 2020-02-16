<template>
   <div class="row">
     <div class="col">
        <ValidationObserver v-slot="{ invalid }">
    <form @submit.prevent="onSubmit">
      <h3>Cadastre-se</h3>

      <ValidationProvider rules="required|email" v-slot="{ errors, classes }">
        <div class="control" :class="classes">
          <input type="text" v-model="user.email">
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

        <ValidationProvider rules="required" v-slot="{ errors, classes }">
          <div class="control" :class="classes">
            <input v-model="user.password" type="password">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>


      <button type="submit" :disabled="invalid">Submit</button>
    </form>
    <div class="has-text-centered" style="margin-top: 20px">
      Ainda não tem conta? <nuxt-link to="/register">Cadastre-se!</nuxt-link>
    </div>
  </ValidationObserver>
     </div>
   </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {ValidationProvider} from "vee-validate";
import {mapState,mapActions} from 'vuex';

export default {
  components: {
      ValidationProvider,
      Logo
    },
    data: () => ({
      user: {
        email: "",
        password: "",
      }

    }),
  head(){
    return {
      title: "Bem Vindo!"
    }
  },
  methods: {
      ...mapActions({
        login: 'login'
      }),
      onSubmit() {
        this.login(this.user)
      }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
