<template>
<b-card-body title="Login">
          <b-card-text>
            <div id="app" class="px-20 py-16">
                <ValidationObserver v-slot="{ invalid }">
            <b-form @submit.prevent="onSubmit">
               
        
              <ValidationProvider 
              class="relative appearance-none w-full TextInput"
              rules="required|email" 
              v-slot="validationContext"
              >
              <!-- v-slot="{ errors, classes }" -->
              <b-form-group id="email" label="Email" label-for="email">
                    <b-form-input
                      id="email"
                      name="email"
                      v-model="user.email"
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-1-live-feedback"
                    ></b-form-input>
        
                    <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
              </ValidationProvider>
        
                <ValidationProvider 
                rules="required" 
                v-slot="validationContext"
                >
                <b-form-group id="password" label="Senha" label-for="password">
                    <b-form-input
                      id="password"
                      name="senha"
                      type="password"
                      v-model="user.password"
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-1-live-feedback"
                    ></b-form-input>
        
                    <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </b-form-group>
        
        
                </ValidationProvider>
        
        
              <b-button variant="primary" type="submit" :disabled="invalid">Entrar</b-button>
            </b-form>

          </ValidationObserver>
             </div>
          </b-card-text>
        </b-card-body>
</template>

<script>
import {ValidationProvider} from "vee-validate";
import {mapState,mapActions} from 'vuex';

export default {
  components: {
      ValidationProvider,
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
      },
      getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    }
}
</script>
