<template>
  <div class="page page--eat-and-drink">
    <div class="page-heading">
      Get true taste of North Shore
    </div>
    <a target="_blank" href="https://www.ilovetakapuna.co.nz/discover/eat-and-drink/" class="page-block page-block--main page-block--image" style="background-image: url('https://ucarecdn.com/0db5a154-f7d2-4d64-a49b-a6a32ae22ea0/-/format/auto/-/resize/800x800/')">
      <div class="page-block__heading">Takapuna Eat and Drink</div>
    </a>
    <a target="_blank" href="https://www.milfordshops.co.nz/directory/eat-drink/" class="page-block page-block--main page-block--image" style="background-image: url('https://ucarecdn.com/858ac78b-5fbf-42e0-9a1b-358bd1b87a99/-/format/auto/-/resize/800x800/')">
      <div class="page-block__heading">Milford Eat and Drink</div>
    </a>
    <a target="_blank" href="https://www.devonport.co.nz/directory/eat-drink/" class="page-block page-block--main page-block--image" style="background-image: url('https://ucarecdn.com/4e0a0aeb-9f97-44ab-887d-703503ff1cd8/-/format/auto/-/resize/800x800/')">
      <div class="page-block__heading">Devonport Eat and Drink</div>
    </a>
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
