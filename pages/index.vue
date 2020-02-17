<template>
<div class="container">
  <b-card no-body class="overflow-hidden" style="margin-top:10%">
    <b-row no-gutters>
      <b-col lg="6">
        <b-card-img src="/index.png"></b-card-img>
      </b-col>
      <b-col v-if="login" lg="3">
          <Login />
          <div class="has-text-centered" style="margin-top: 20px; text-align: center;">
              Ainda não tem conta? <span style= "color: #007bff; cursor: pointer; "@click="change">Cadastre-se!</span>
            </div>
      </b-col>
      <b-col v-if="register" lg="3">
          <Register />
          <div class="has-text-centered" style="margin-top: 20px; text-align: center;">
          Já possui conta? <span style= "color: #007bff; cursor: pointer; "@click="change">Entrar</span>
          </div>
      </b-col>
    </b-row>
  </b-card>
  </div>
</template>

<script>
import Register from '~/components/Register.vue'
import Login from '~/components/Login.vue'
import {ValidationProvider} from "vee-validate";
import {mapState,mapActions} from 'vuex';

export default {
  components: {
      Register,
      Login,
    },
    data: () => ({
        login: true,
        register: false,
    }),
    methods: {
        change(){
            this.login = !this.login,
            this.register = !this.register
        }
    }
}
</script>

<style>

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
