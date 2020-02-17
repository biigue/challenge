<template>
<div>
  <Navbar />
  <div class="container">
  <b-card no-body class="overflow-hidden" style="margin-top:10%">
    <b-row no-gutters>
      <b-col lg="4">
        <div class="ajust">
          <h2 style="tet-align: center;">Procure aqui</h2>
          <gmap-autocomplete class="mapInput" required ref="complete" placeholder="pesquisar"
            v-on:place_changed="getAddressData" @place_changed="local"></gmap-autocomplete>
          <div v-if="currentPlace" style="margin: 20px;">
            <div>
              <h4>{{currentInfos.name}}</h4>
              <span>
                {{currentInfos.address}}, {{currentInfos.rating}}
              </span>
            </div>
            <div>

              <b-button @click="showReview">Avaliações</b-button>
              <b-button @click="user_review">Avaliar</b-button>
              <div class="review" v-if="review">

                <div v-for="item in currentInfos.reviews">
                  <b-card>
                    <b-card-text>
                      <h5>{{ item.author }} - Nota:{{ item.rating }}</h5>
                      <span>{{ item.msg }}</span>
                    </b-card-text>
                  </b-card>
                </div>
              </div>
              <div class="avaliar" v-if="avaliar" style="margin-top: 25px;">
                <b-form @submit.prevent="onSubmit">
                  <b-form-textarea id="textarea" v-model="reviewInfos.msg" placeholder="O que achou do lugar?" rows="3"
                    max-rows="6"></b-form-textarea>

                  <b-form-checkbox id="checkbox-1" v-model="reviewInfos.favorite" name="checkbox-1" value="accepted"
                    unchecked-value="not_accepted">
                    Favoritar
                  </b-form-checkbox>


                  <b-button @click="enviarReview" variant="primary" type="submit">Entrar</b-button>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="8">
        <gmap-map :center="center" :zoom="17" style="width:100%;  height: 75vh;">
          <gmap-marker v-for="(m, index) in markers" :key="index" :clickable="true" :draggable="true"
            :position="m.position" , @click="center=m.position"></gmap-marker>

        </gmap-map>
      </b-col>
    </b-row>
  </b-card>
  </div>
  </div>
</template>

<script>
  import {ValidationProvider} from "vee-validate";
  import Navbar from '~/components/Navbar.vue'
  import {mapState,mapActions} from 'vuex';
  export default {
    components:{
      Navbar
    },
    data: () => ({
      review: false,
      avaliar: false,
      center: {
        lat: -3.350235,
        lng: 111.995865
      },
      mapTypeId: "terrain",
      markers: [],
      currentPlace: false,
      currentInfos: {},
      reviewInfos: {
        msg: '',
        favorite: '',
      },
    }),
    mounted() {
      this.geolocate()
    },

    methods: {
      ...mapActions({
        setAvaliacao: 'setAvaliacao'
      }),
      onSubmit() {
        this.currentInfos.reviewInfos = this.reviewInfos
        this.setAvaliacao(this.currentInfos)
        this.avaliar = false
        alert("Obrigada pela avaliação!")
      },
      enviarReview() {
        console.log(this.reviewInfos)
      },
      showReview() {
        this.review = !this.review
        this.avaliar = false
      },
      user_review() {
        this.avaliar = !this.avaliar
        this.review = false
      },
      local({
        geometry
      }) {
        this.markers.push({
          lat: geometry.location.lat(),
          lng: geometry.location.lng()
        })
      },
      clean() {
        this.currentPlace = false,
          currentInfos = {}
      },

      getAddressData(addressData, placeResultData, id) {
        var placeActive = addressData
        var reviews = placeActive.reviews
        var reviewsFormatted = this.getReview(reviews)
        this.currentInfos.name = placeActive.name
        this.currentInfos.address = placeActive.formatted_address
        this.currentInfos.lat = placeActive.geometry.location.lat()
        this.currentInfos.lng = placeActive.geometry.location.lng()
        this.currentInfos.rating = placeActive.rating
        this.currentInfos.favorite = false

        this.addMarker(this.currentInfos.lat, this.currentInfos.lng)
        //this.currentPlace =  {...placeInfos},
      },
      getReview(review) {
        var result = []
        for (var i in review) {
          result.push({
            author: review[i].author_name,
            rating: review[i].rating,
            msg: review[i].text,
          })
        }
        this.currentInfos.reviews = result
      },

      addMarker(lat, lng) {

        this.markers.push({
          lat: lat,
          lng: lng
        })
        this.center = {
          lat: lat,
          lng: lng
        };
        this.currentPlace = true
      },

      geolocate: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      },
    }

  };

</script>

<style>
  .ajust {
    text-align: center;
  }

</style>
