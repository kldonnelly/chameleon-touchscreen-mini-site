<template>
  <div
    class="page-block page-block--secondary page-block--weather page-block--main"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="weather__date-time">
      <div class="weather__time">
        {{ time }}
      </div>
      <div class="weather__dateday">
        <div class="weather__date">
          {{ date }}
        </div>
        <div class="weather__day">
          {{ weekday }}
        </div>
      </div>
    </div>
    <div class="weather__city">{{ City }}</div>
    <div class="weather__main">
      <span class="weather__weather">{{ weather }}</span>
      <img
        :src="`https://openweathermap.org/img/wn/${iconcode}@2x.png`"
        class="weather__icon-img"
      />
    </div>
  </div>
</template>

<script>
import { getCache, setCache } from "@/services/cache";
export default {
  name: "WeatherCard",
  props: ["backgroundColor", "City"],
  data: function () {
    return {
      time: "",
      date: "",
      weekday: "",
      week: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      weather: "Loading",
      iconcode: "01d",
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
    this.updateWeather();
  },
  methods: {
    updateTime() {
      const cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2);
      this.date =
        this.zeroPadding(cd.getDate(), 2) +
        "/" +
        this.zeroPadding(cd.getMonth() + 1, 2);
      this.weekday = this.week[cd.getDay()];
    },
    zeroPadding(num, digit) {
      let zero = "";
      for (let i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
    updateWeather() {
      const cache = getCache("weather");
      if (cache !== null) {
        this.weather = cache.weather;
        this.iconcode = cache.iconcode;
        console.log("loaded weather from cache");
      } else {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.City}&appid=5b759b50bcd151826eb1216092d0987a`
        )
          .then((res) => res.json())
          .then((result) => {
            const main = result.weather[0];
            this.weather = main.main;
            this.iconcode = main.icon;
            setCache(
              "weather",
              {
                weather: this.weather,
                iconcode: this.iconcode,
              },
              10
            );
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>