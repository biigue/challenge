import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'user',
      storage: window.localStorage,
      //getState: (key) => window.localStorage.getItem(key)
      getState: (key) => Cookie.getJSON(key), 
    }).plugin(store);
  });
}