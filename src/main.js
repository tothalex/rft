import Vue from "vue";
import App from "./App.vue";
import VueNativeSock from "vue-native-websocket";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueNativeSock, "ws://localhost:8089/ws", {
  store: store,
  format: "json"
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
