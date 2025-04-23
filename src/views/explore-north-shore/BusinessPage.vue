<template>
  <div class="page page--business-page">
    <div class="item-list item-list--business">
      <div class="list-item">
        <div class="list-item__thumbnail" v-if="this.imageUrl">
          <img :src="this.imageUrl" alt="">
        </div>
        <div class="list-item__main">
          <div class="list-item__heading">{{ this.title }}</div>
          <div class="list-item__detail" v-if="this.phone"><img class="list-item__icon" src="@/assets/icons/phone.svg">{{ this.phone }}</div>
          <div class="list-item__detail" v-if="this.link"><img class="list-item__icon" src="@/assets/icons/click.svg">{{ this.link }}</div>
          <div class="list-item__detail" v-if="this.address"><img class="list-item__icon" src="@/assets/icons/pin.svg">{{ this.address }}</div>
        </div>
      </div>
    </div>
    <div class="business-map">
      <iframe
          frameborder="0" style="border:0"
          :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyDA3m5_3eWWnp4vYOPS18b1jo23uhJt8e8&q=${this.address}`" allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<script>
import {getCache} from "@/services/cache";

export default {
  name: "BusinessPage",
  data: function () {
    return {
      title: 'loading',
      phone: 'loading',
      link: 'loading',
      address: 'loading',
      imageUrl: ''
    }
  },
  mounted() {
    const completeList = getCache('businesscompletelist');
    if (completeList !== null) {
      console.log(`loaded businesscompletelist from cache`);
      completeList.listItems.forEach((item) => {
        if (item.id === this.$route.params.businessAlias) {
          this.title = item.title;
          this.phone = item.phone;
          this.link = item.link;
          this.address = item.address;
          this.imageUrl = item.imageUrl;
        }
      })
    }
  }
}
</script>