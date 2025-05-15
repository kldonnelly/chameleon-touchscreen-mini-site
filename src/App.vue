<template>
  <div id="app">
    <div v-if="edit">
      <button class="edit" type="button" v-on:click="signon">
        {{ btnSignOnText }}
      </button>
      <div>{{ lbemail }}</div>
      <div>{{ lbUID }}</div>
    </div>
    <router-view></router-view>
    <div
      style="
        left: 32px;
        cursor: pointer;
        bottom: 8rem;
        position: fixed;
        padding: 10px;
        font-size: 32px;
        background: rgba(255, 255, 255, 0.867);
        z-index: 999;
      "
    >
      <div style="float:left" @click="home">Home </div><div  style="float:left" @click="back"> ❰Back</div>
    </div>
  </div>
</template>

<script>
import router from "./router/index";
import { Firebase } from "@kevinldonnelly/storage-view-controllers";
import { provide, ref } from "vue";
const crud_array = [];

import { crud_firestore } from "./FireStoreCrud";
import { crud_firebase } from "./FirebaseCrud";
import { crud_cloud } from "./crud-isb-cloudfunctions";

crud_array.push(crud_firestore);
crud_array.push(crud_firebase);
crud_array.push(crud_cloud);

var crud_global = crud_array[1];
var storage_controller = new Firebase.StorageController();

var config = {
  apiKey: "AIzaSyBbJ3TUQsjxu0dMcGd4A3AN_Hj3KbGBvPs",
  authDomain: "soultech-signage.firebaseapp.com",
  databaseURL: "https://soultech-signage.firebaseio.com",
  projectId: "soultech-signage",
  storageBucket: "soultech-signage.appspot.com",
  messagingSenderId: "629054288068",
  appId: "1:629054288068:web:bdcf4da2b742a403efd991",
  measurementId: "G-RQNNGD71XQ",
};

export default {
  name: "App",
  setup() {
    const crudcomputed = ref(crud_global);
    const storagecontroller = ref(storage_controller);
    const edit = ref(false);
    provide("crudprovide", crudcomputed);
    provide("storagecontroller", storagecontroller);
    provide("edit", edit);
    return {
      crudcomputed,
      storagecontroller,
      edit,
    };
  },

  router: router,
  data() {
    return {
      btnSignOnText: "Signin",
      lbluser: "",
      lbemail: "nobody",
      lbUID: "0",
      firebase_signin: "none",
      signin_provider: "Google",
      crudprovider: "cloud",
      crudprovider_index: 1,
      homeurl:""
     
    };
  },

  mounted: function () {
    let params = new URLSearchParams(window.location.search);
    this.homeurl=window.location.href;
    console.log(window.location.href);
    this.crudprovider = params.get("crud");
    let crudprovider_index = parseInt(this.crudprovider);
    if (isNaN(crudprovider_index) || crudprovider_index >= crud_array.length) {
      this.crudprovider_index = 0;
    } else {
      this.crudprovider_index = crudprovider_index;
    }
    console.log(this.crudprovider);
    this.crudcomputed = crud_array[this.crudprovider_index];
    this.crudcomputed.init(config, (currentUser) => {
      this.auth_change(currentUser);
    });

    if (params.has("edit")) this.edit = true;
  },
  methods: {
    back: function () {
      history.back();
    },
    home: function () {
      window.location.href = this.homeurl;
    },
    signon: function () {
      console.log("signon button clicked");

      if (this.btnSignOnText === "Sign Out")
        this.crudcomputed.signOut(() => {
          this.btnSignOnText = "Sign In";
          this.lbemail = "";
          this.lbUID = "";
        });
      else {
        this.crudcomputed.signIn((result) => {
          this.onsignin(result);
        });
      }
    },
    auth_change: function (currentUser) {
      console.log(`firebase_onchange`);
      this.edit = true;
      console.log(currentUser);
      this.btnSignOnText = "Sign Out";
      this.lbemail = currentUser.email;
      this.lbUID = currentUser.uid;
      this.crudcomputed.user = currentUser.displayName;
      this.crudcomputed.path = `/users/${currentUser.displayName}`;
    },
    onsignin: function (result) {
      console.log("signed on/off");
      console.log(result);
      if (result) {
        this.btnSignOnText = "Sign Out";
      } else {
        this.btnSignOnText = "Sign In";
        this.lbemail = "nobody";
        this.lbUID = "";
      }
    },
  },
};
</script>

<style lang="scss">
@use "assets/styles/main" as *;
@use "assets/styles/landing" as *;
@use "assets/styles/pubic-transport" as *;
@use "assets/styles/explore" as *;
</style>
