import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  socket: {
    isConnected: false,
    message: "",
    reconnectError: false
  },
  messages: []
};

// getters
const getters = {
  GET_MESSAGES(state) {
    return state.messages;
  }
};

// mutations
const mutations = {
  SOCKET_ONOPEN(state) {
    state.socket.isConnected = true;
  },
  SOCKET_ONCLOSE(state) {
    state.socket.isConnected = false;
  },
  SOCKET_ONERROR() {
    //console.error(state, event);
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    switch (message.type) {
      case "message":
        state.messages.push(message.payload);
        break;
      default:
        state.socket.message = message;
    }
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT() {
    //console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true;
  }
};

//actions
const actions = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
