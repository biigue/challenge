import Vue from "vue";
import { extend, ValidationObserver } from "vee-validate";
import { required, email, confirmed } from "vee-validate/dist/rules";

import { configure } from 'vee-validate';

Vue.component('ValidationObserver', ValidationObserver);

configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
      dirty: ['is-dirty', 'is-dirty'],
      // ...
    }
  })

extend("required", {
  ...required,
  message: "O campo é obrigatório."
});


extend('email', {
    ...email,
    message: 'Digite um email válido'
  });

extend('confirmed', {
    ...confirmed,
    message: 'As senhas não coincidem'
});


extend('min', {
    validate(value, args) {
      return value.length >= args.length;
    },
    params: ['length'],
    message: 'O Campo deverá ter {length} caracteres'
  });