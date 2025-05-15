<template>
  <EditCard
    :edit="edit"
    :backgroundColor="backgroundColor"
    :classObject="classObject"
    @onedit="handleOnedit" 
    @onremove="handleOnRemove"
  >
    <router-link :to="to" class="list-item">
      <div class="list-item__thumbnail">
        <img :src="image" alt="" />
      </div>
      <div class="list-item__main">
        <div class="list-item__heading">{{ title }}</div>
        <div class="list-item__detail">
          <img class="list-item__icon" src="@/assets/icons/phone.svg" />{{
            phone
          }}
        </div>
        <div class="list-item__detail">
          <img class="list-item__icon" src="@/assets/icons/click.svg" />{{
            link
          }}
        </div>
        <div class="list-item__detail">
          <img class="list-item__icon" src="@/assets/icons/pin.svg" />{{
            address
          }}
        </div>
      </div>
    </router-link>
  </EditCard>
</template>



<script>
import EditCard from "./EditCard.vue";

export default {
  name: "BusinessCard",
  props: [
    "index",
    "to",
    "title",
    "image",
    "phone",
    "link",
    "backgroundColor",
    "address",
    "edit",
    "id",
  ],
  data() {
    return {
     
    };
  },
  components: { EditCard },
  mounted: function () {
    console.log(window.location.href);
  },

  methods: {
    handleOnedit() {
      var value = {
        title: this.title,
        id: this.id,
        phone: this.phone,
        address: this.address,
        link: this.link,
        index: this.index,
        image: this.image,
      };
      console.log(value);
      this.$emit("on_edit", value);
    },
    handleOnRemove() {
      var value = {
        title: this.title,
        id: this.id,
        phone: this.phone,
        address: this.address,
        link: this.link,
        index: this.index,
        image: this.image,
      };
       console.log(value);
      this.$emit("on_remove", value);
    },
  },
};
</script>