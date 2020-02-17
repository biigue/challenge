<template>
  <div>
      <h2>Search and add a pin</h2>

        <gmap-autocomplete
        class="mapInput"
        required
        ref = "complete"
        placeholder = "pesquise"
        v-on:place_changed="getAddressData"
          @place_changed="local"
          ></gmap-autocomplete>
        <button @click="addMarker">Add</button>
    <gmap-map
      :center="center"
      :zoom="17"
      style="width:100%;  height: 400px;" 
      class="map"
    >
      <gmap-marker
        :key="index"
        :clickable="true"
        :draggable="true"
        v-for="(m, index) in markers"
        :position="m.position",
        @click="show"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>


<script>
//@click="center=m.position"
export default {
  data() {
    return {
      center: { lat: -3.350235, lng: 111.995865 },
      mapTypeId: "terrain",
      markers: [],
      currentPlace: null,
      
    };
  },
  mounted() {
    this.geolocate()
    this.show()
  },
  
  methods: {
    show(){
      if (document.querySelector(".view-link")){
      }
    },
    local({ geometry }) {
      this.markers.push({ lat: geometry.location.lat(), lng:  geometry.location.lng() })
    },
    getAddressData(addressData, placeResultData, id){
      var placeActive = addressData
      var placeInfos = {
        name: placeActive.name,
        addres: placeActive.formatted_address,
        lat: placeActive.geometry.location.lat(),
        lng: placeActive.geometry.location.lng(),
        rating: placeActive.rating,
      }
      console.log(addressData)
      //var a = document.querySelector(".view-link")
      //console.log(a)
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
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
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
.view-link{
}
</style>
