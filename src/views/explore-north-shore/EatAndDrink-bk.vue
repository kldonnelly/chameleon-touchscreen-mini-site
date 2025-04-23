<template>
  <div class="page page--item-list">
    <div class="page-heading">
      Get amazed by the taste
    </div>
    <div class="page-header">
      Plenty of places you can choose from to satisfy your tongue and tummy.
    </div>
    <div class="business-page-search">
      <input type="text" class="business-page-search__input" placeholder="Search business by name" v-model="search">
    </div>
    <div class="item-list item-list--business">
      <router-link :to="`/explore-north-shore/explore/business-page/${item.id}`"  v-for="item in computedList" class="list-item" :key="item.title">
        <div class="list-item__thumbnail" v-if="item.imageUrl">
          <img :src="item.imageUrl" alt="">
        </div>
        <div class="list-item__main">
          <div class="list-item__heading">{{ item.title }}</div>
          <div class="list-item__detail" v-if="item.phone"><img class="list-item__icon" src="@/assets/icons/phone.svg">{{ item.phone }}</div>
          <div class="list-item__detail" v-if="item.link"><img class="list-item__icon" src="@/assets/icons/click.svg">{{ item.link }}</div>
          <div class="list-item__detail" v-if="item.address"><img class="list-item__icon" src="@/assets/icons/pin.svg">{{ item.address }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getCache, setCache } from "@/services/cache";
export default {
  data() {
    return {
      search: '',
      listItems: [
        {
          title: 'Loading...'
        }
      ],
      computedList: []
    }
  },
  mounted() {
    const cache = getCache(`businesslist-${this.region}`);
    if (cache !== null) {
      this.listItems = cache.listItems;
      this.computedList = this.listItems;
      console.log(`loaded businesslist-${this.region} from cache`);
    }
    else {
      let endpoint = 'https://us-central1-chameleon-isb.cloudfunctions.net/api/business-directory?category=eat-and-drink';

      if (window.location.hostname === 'localhost') {
        endpoint = 'http://localhost:5001/chameleon-isb/us-central1/api/business-directory?category=eat-and-drink';
      }

      fetch(`${endpoint}`, {
        method: 'GET',
        headers: {
          'x-secret': 'chameleon-isb-mini-site'
        }
      }).then(res => res.json()).then(result => {
        this.listItems = result;
        this.computedList = this.listItems;
        if (result.length) {
          setCache(`businesslist-${this.region}`, {
            listItems: this.listItems
          }, 60 * 24 * 7); // 1 week
        }
      }).catch(e => {
        console.log(e);
      });
    }
  },
  watch: {
    search: function(newVal) {
      setTimeout(() => {
        if (newVal !== '' && newVal !== null) {
          this.computedList = this.listItems.filter(item => {
            return item.title.toLowerCase().includes(newVal.toLowerCase());
          })
        }
        else {
          this.computedList = this.listItems;
        }
      }, 200);
    }
  }
}
</script>