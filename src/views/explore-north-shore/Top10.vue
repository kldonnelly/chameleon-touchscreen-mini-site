<template>
  <div class="page page--item-list">
    <div class="page-heading">
      Check out our Top 10 things to do
    </div>
    <div class="page-header">
      From volcanic views to amazing heritage attractions, there is an abundance of activities to do whilst visiting the North Shore. Check out our Top 10 Must Do’s and start planning your trip.
    </div>
    <div class="item-list">
      <div class="item-list item-list--image-dominant">
        <div v-for="item in events" class="list-item" :key="item.heading">
          <div class="list-item__thumbnail" :style="`background-image: url('${item.imageUrl}')`"></div>
          <div class="list-item__main">
            <div class="list-item__heading">{{ item.title }}</div>
            <div class="list-item__detail">{{ item.desc }}</div>
          </div>
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
      region: '',
      events: [
        {
          title: 'Loading...'
        }
      ],
    }
  },
  mounted() {const cache = getCache(`businesslist-top10`);
    if (cache !== null) {
      this.events = cache.events;
      console.log(`loaded businesslist-top10 from cache`);
    }
    else {
      let endpoint = 'https://us-central1-chameleon-isb.cloudfunctions.net/api/top-10';

      if (window.location.hostname === 'localhost') {
        endpoint = 'http://localhost:5001/chameleon-isb/us-central1/api/top-10';
      }

      fetch(`${endpoint}`, {
        method: 'GET',
        headers: {
          'x-secret': 'chameleon-isb-mini-site'
        }
      }).then(res => res.json()).then(result => {
        this.events = result;
        if (result.length) {
          setCache(`businesslist-top10`, {
            events: this.events
          }, 60 * 24 * 7); // 1 week
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