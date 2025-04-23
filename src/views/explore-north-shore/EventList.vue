<template>
  <div class="page page--item-list">
    <div class="page-heading">
      Plan Your North Shore Trip Today
    </div>
    <div class="page-header">
      From concerts to comedy, awesome theatre shows, summer and winter festivals, to foodie events – there’s plenty on the menu here to entertain you throughout the year, come night and day.
    </div>
    <div class="item-list">
      <div v-for="item in events" class="list-item" :key="item.title">
        <div class="list-item__thumbnail">
          <img :src="item.imageUrl" alt="">
        </div>
        <div class="list-item__main">
          <div class="list-item__heading">{{ item.title }}</div>
          <div class="list-item__dates">{{ item.startDate | ISOtoNZDate }} <span v-if="item.endDate !== item.startDate"> - {{ item.endDate | ISOtoNZDate }}</span></div>
          <div class="list-item__detail">{{ item.simpleDesc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCache, setCache } from "@/services/cache";

export default {
  data() {
    return {
      events: [
        {
          title: 'Loading...'
        }
      ],
    }
  },
  props: [
      'region'
  ],
  mounted() {
    const cache = getCache(`eventlist-${this.region}`);
    if (cache !== null) {
      this.events = cache.events;
      console.log(`loaded eventlist-${this.region} from cache`);
    }
    else {
      let endpoint = 'https://us-central1-chameleon-isb.cloudfunctions.net/api/events';

      if (window.location.hostname === 'localhost') {
        endpoint = 'http://localhost:5001/chameleon-isb/us-central1/api/events';
      }

      fetch(`${endpoint}?region=${this.region}`, {
        method: 'GET',
        headers: {
          'x-secret': 'chameleon-isb-mini-site'
        }
      }).then(res => res.json()).then(result => {
        this.events = result;
        if (result.length) {
          setCache(`eventlist-${this.region}`, {
            events: this.events
          }, 60 * 24); // 1 day
        }
      }).catch(e => {
        console.log(e);
      });
    }
  },
  filters: {
    ISOtoNZDate(isoDate) {
      if (isoDate === undefined)
        return '';
      let parts = isoDate.split('-');
      parts.reverse();
      return parts.join('/');
    }
  }
}
</script>