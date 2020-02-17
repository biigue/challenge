<template>
  <ValidationObserver v-slot="{ invalid }">
    <form @submit.prevent="onSubmit">
      <h3>Cadastre-se</h3>
      <ValidationProvider rules="required|min:3" v-slot="{ errors, classes }">
        <div class="control" :class="classes">
          <input type="text" v-model="user.name">
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider rules="required|email" v-slot="{ errors, classes }">
        <div class="control" :class="classes">
          <input type="text" v-model="user.email">
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationObserver>
        <ValidationProvider rules="confirmed:confirmation|min:6" v-slot="{ errors, classes }">
          <div class="control" :class="classes">
            <input v-model="user.password" type="password">
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" vid="confirmation">
          <input v-model="user.confirmation" type="password">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
      </ValidationObserver>

      <button type="submit" :disabled="invalid">Submit</button>
    </form>
    <div class="has-text-centered" style="margin-top: 20px">
      Já tem uma conta? <nuxt-link to="/">Entrar</nuxt-link>
    </div>
  </ValidationObserver>

</template>

<script>
  import {ValidationProvider} from "vee-validate";
  import {mapState,mapActions} from 'vuex';

  export default {
    components: {
      ValidationProvider
    },
    data: () => ({
      user: {
        name: "",
        email: "",
        password: "",
        confirmation: "",
      }

    }),
    methods: {
      ...mapActions({
        userRegister: 'userRegister'
      }),
      onSubmit() {
        this.userRegister(this.user)
      }
    }
  };

</script>

<style>
  .control {
    width: 100;
  }

  .span {
    display: block;
  }

  input {
    padding: 5px 10px;
  }

  .is-invalid span,
  .is-invalid input {
    color: #EB0600
  }

  .is-invalid input {
    border: 1px #EB0600 solid
  }

  .is-valid span,
  .is-valid input {
    color: #045929
  }

  .is-valid input {
    border: 1px #045929 solid
  }

</style>
