<template>
<div>
  <Navbar />
<div class="container">
  <div class="col-" style="margin:auto; margin-top: 10%;">
    <h2> Avaliçãoes </h2>
  <div v-for="item in review">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="7">
       <h4>{{item.name}}</h4>
       <b-card-text>
         {{item.address}}
       </b-card-text>

      </b-col>
      <b-col md="5">
        <b-card-body>
          <b-card-text>
            <h5>{{item.rating}}
            <span v-if="item.favorite">
              🌟
            </span></h5>
            {{item.msg}}
            
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from '~/components/Navbar.vue'
export default {
  components:{
      Navbar
    },
  data: () =>({
    reviews: [],

  }),
  mounted(){

  },
  computed:{
    ...mapState({
      review: state => state.review
    }),
  },
  methods:{

  }
}
</script>