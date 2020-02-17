<template>
<b-card-body title="Cadastro">
          <b-card-text>
            <div id="app" class="px-20 py-16">
  <ValidationObserver v-slot="{ invalid }">
    <b-form @submit.prevent="onSubmit">

      <ValidationProvider 
      class="relative appearance-none w-full TextInput"
      rules="required|min:3" 
      v-slot="validationContext"
      >

      <b-form-group id="nome" label="Nome" label-for="nome">
                    <b-form-input
                      id="nome"
                      name="nome"
                      v-model="user.name"
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-1-live-feedback"
                    ></b-form-input>
        
                    <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider 
      class="relative appearance-none w-full TextInput"
      rules="required|email" 
      v-slot="validationContext"
      >
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

      <ValidationObserver>
        <ValidationProvider 
        class="relative appearance-none w-full TextInput"
        rules="confirmed:confirmation|min:6" 
        v-slot="validationContext">
        <b-form-group id="password" label="Senha" label-for="password">
                    <b-form-input
                      id="password"
                      name="password"
                      type="password"
                      v-model="user.password"
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-1-live-feedback"
                    ></b-form-input>
        
                    <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </b-form-group>

        </ValidationProvider>

        <ValidationProvider 
        class="relative appearance-none w-full TextInput"
         v-slot="validationContext" 
        vid="confirmation"
        >
        <b-form-group id="confirmation" label="Confirme sua Senha" label-for="confirmation">
                    <b-form-input
                      id="confirmation"
                      name="confirmation"
                      type="password"
                      v-model="user.confirmation"
                      :state="getValidationState(validationContext)"
                      aria-describedby="input-1-live-feedback"
                    >
            </b-form-input>
        </b-form-group>
        </ValidationProvider>
      </ValidationObserver>

      <b-button variant="primary" type="submit" :disabled="invalid">Cadastrar</b-button>
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
      },
      getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    }
  };

</script>
