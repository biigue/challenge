<template>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: "",
      email: "",
      password: "",
      confirmation: "",
    },
  }),
  methods:{
   ...mapActions({
       edit: 'editUser'
    }),
    change() {
      this.edit(this.editUser)
    },
  },
  computed: {
    ...mapState({
      tname: state => state.name,
      tuser: state => state.email_user,
      tuser: state => state.password,
    }),
  },
  mounted() {
  }
}

</script>