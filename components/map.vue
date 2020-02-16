<template>
    <VueGooglePlaces
    :api-key="AIzaSyAXkyNmeW6UsXy8EQhNNLxnn3KVRtNTBrQ"
    class="subheading"
    :enable-geolocation="true"
    types="(cities)"
    country="us"
    @placechanged="getAddressData"
  >
    <MyInput
      icon="search"
      :value="value"
      :placeholder="$t('Your place')"
      ...
    />
  </VueGooglePlaces>
</template>  
<script> 
import { VueGooglePlaces } from 'vue-google-places'
export default {
    
}
</script>
 
    