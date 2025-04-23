<template>
  <div class="page page--item-list">
    <div class="page-heading">
      Tours and Trips
    </div>
    <div class="item-list item-list--image-dominant">
      <div v-for="item in events" class="list-item" :key="item.heading">
        <div class="list-item__thumbnail" :style="`background-image: url(${item.thumbnail})`"></div>
        <div class="list-item__main">
          <div class="list-item__heading">{{ item.heading }}</div>
          <div class="list-item__detail">{{ item.detail }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      region: '',
      events: [
        {
          heading: 'Cyling Routes',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Tours%20and%20Trips/Devonport-to-Takapuna-Green-route-5.jpg',
          detail: 'Bikes maybe taken onto the Ferries without any additional charge.  Cycling from Devonport to Takapuna and on to Milford using the Green Route is an ideal way to explore the area.  Check out the following route maps.'
        },
        {
          heading: 'Devonport Tours',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Tours%20and%20Trips/milford-taka20-12-2015060blog.jpg',
        },
        {
          heading: 'Electric Bikes for Hire',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Tours%20and%20Trips/18527071_1883762385231266_2680140106434891633_o.jpg',
          detail: 'Electric bikes take away any of the angst about hills and are a great way to enjoy all the trails and activities that North Shore has to offer.'
        },
        {
          heading: 'Segway Tours',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Tours%20and%20Trips/29791332_10156411829323944_1145029841226245646_n.jpg',
          detail: 'What better way to tackle some of the “walks” around Devonport than on a tourism-award winning Segway tour? Tours can be tailormade to suit the time you have – and you’ll get a short lesson on how to ride these maneuverable and versatile vehicles.'
        },
        {
          heading: 'The Big Foody Tours',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Tours%20and%20Trips/thebigfoody006.jpg',
          detail: 'The culinary gem of the South Pacific, Auckland is a vibrant and exciting city surrounded by water, volcanoes, vineyards and beaches. As the gateway to the rest of the country Auckland is the first port of call for many visitors coming to New Zealand and our tours are designed to give you the very best introduction to our gorgeous city and country.'
        }
      ],
    }
  },
  mounted() {
    this.region = this.$route.meta.region;
  }
}
</script>