<template>
  <div class="page page--landing">
    <div class="page page--landing">
      <HomeCard
        v-for="(item, index) in list"
        :key="item.to"
        :index="index"
        :image="item.Image"
        :to="item.to"
        :backgroundColor="item.backgroundColor"
        :heading="item.heading"
        :edit="edit"
        :class="classObject"
        @onedit="handleedit"
        @onremove="handleRemove"
      ></HomeCard>
      <WeatherCard
        :City="City"
        :backgroundColor="WeatherCardbackgroundColor"
      ></WeatherCard>
      <QRCodeCard
        :backgroundColor="QRCardbackgroundColor"
        :src="ImageQRcode"
      ></QRCodeCard>
    </div>
  </div>
</template>

<script>
import HomeCard from "./HomeCard.vue";
import WeatherCard from "./WeatherCard.vue";
import QRCodeCard from "./QRCodeCard.vue";
import ImageBus from "@/assets/icons/bus.svg";
import ImageMap from "@/assets/icons/map.svg";
import ImageVoucher from "@/assets/icons/voucher.svg";
import ImageQRcode from "@/assets/images/qr-to-the-mini-site.png";

export default {
  name: "Home",
  components: { HomeCard, WeatherCard, QRCodeCard },
  data: function () {
 
    return {
      WeatherCardbackgroundColor: "#dea141",
      QRCardbackgroundColor: "#dea141",
      City: "Auckland",
      classObject: "page-block page-block--main",
      edit: false,
      ImageQRcode: ImageQRcode,

      list: [
        {
          heading: "Public Transport",
          to: "public-transport",
          Image: ImageBus,
          backgroundColor: "#2b6eac",
        },
        {
          heading: "Explore North Shore",
          to: "explore-north-shore",
          Image: ImageMap,
          backgroundColor: "#598d16",
        },
        {
          heading: "Gift Vouchers",
          to: "gift-vouchers",
          Image: ImageVoucher,
          backgroundColor: "#c36e20",
        },
        {
          heading: "ATEED",
          to: "ateed",
          Image:
            "https://ucarecdn.com/9fbb8151-f3bd-4e6f-98a7-3137fb9aa20e/-/resize/400x400/",
          backgroundColor: "#f47700",
        },
      ],
    };
  },
  mounted() {
    let params = new URLSearchParams(window.location.search);

    if (params.has("edit")) {
      this.edit = true;
    }
  },
  methods: {
    handleRemove(e) {
      //  const index = parseInt(e.detail[0]);
      //this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
      console.log("handleRemove " + e);
    },
    handleedit(e) {
      console.log("handleedit " + e);
      this.$emit("onhandledit", e);
    },
  },
};
</script>
