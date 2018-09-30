<template>
<div>
<div class="container">
  <div v-for="(msg, idx) in msgs" :key="'msg' + idx" class="message">
    {{msg}}
  </div>
</div>
<div class="form-group row">
  <div class="col-10">
    <input class="form-control" type="text" v-model="msg">
  </div>
  <button type="button" class="btn btn-info" @click="send">Send</button>
</div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Chatbox",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    send() {
      if (this.msg.length > 0) {
        this.$socket.send(
          JSON.stringify({
            type: "message",
            payload: this.msg
          })
        );
        this.msg = "";
      }
    }
  },
  computed: {
    ...mapGetters({
      msgs: "GET_MESSAGES"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: auto;
  padding: 10px;
  height: 600px;
  background-color: teal;
  overflow: auto;
}

.form-group {
  padding-left: 80px;
  padding-top: 5px;
}

.message {
  margin: 2px;
  display: inline;
  padding: 10px;
  background-color: darkseagreen;
  text-align: left;
  border-radius: 25px;
  clear: both;
  float: left;
}
</style>
