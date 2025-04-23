<template>
  <div class="page page--item-list">
    <div class="page-heading">
      Shopping on the North Shore
    </div>
    <div class="page-header">
      Devonport, Takapuna and Milford offer a shopping experience unlike the other. Shore City, Takapuna and The Milford Centre offer variety and convenience and are ideal for beautiful gifts, places to eat and the latest in fashion & homewares.
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
          heading: 'Devonport',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Shopping/devonport-shopping.jpg',
          detail: 'The commercial area on lower Victoria Road was first established in response to the new ferry service that connected Devonport with the city in the 1860s. 20 Years on Victoria Road had become the leading commercial centre of the North Shore and by the 1920s it was lined with fine Victorian and Edwardian commercial premises. Today Victoria Road has one of the most intact collections of Victorian and Edwardian commercial buildings in Auckland and several have been listed by Heritage New Zealand.\n' +
              '\n' +
              'Devonport is fortunate to boast adorable boutique shops, high-end fashion retailers, gift and homewares.  It\'s not only the retail offer that makes Devonport village unique. With a lively and active café scene and diverse range of eateries, dining in Devonport is consistently relaxed and enjoyable.'
        },
        {
          heading: 'Takapuna Beach',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Shopping/McKENZIES%20-%20Hurstmere%20Rd.jpg',
          detail: 'A vibrant beachside destination with a city rhythm, Takapuna encompasses the best of everything – a relaxed beach atmosphere, designer shopping, a thriving hospitality scene with a huge variety of cafés,restaurants and bars with simply stunning views out across the Hauraki Gulf to the iconic Rangitoto Island.\n' +
              '\n' +
              'Walk the historic ‘lava’ trail along the beach foreshore, paddle board or kayak at the beach or choose to relax by Lake Pupuke, Auckland’s only fresh water lake. Stroll the Sunday markets, take in a live show and enjoy the huge variety of wonderful hospitality. '
        },
        {
          heading: 'Shore City Shopping Centre, Takapuna Beach',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Shopping/52-anzac-ave-takapuna-shore-city-interior-from-top-of-escalator.jpg',
          detail: 'With its calm ambience, elegant beach-side feel and select mix of fashion and lifestyle stores, Shore City is a specialty shopping experience. You’ll find it nestled alongside Takapuna Beach’s chic bars, cafes & restaurants – with the beach just a short stroll away.'
        },
        {
          heading: 'Milford Village',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Shopping/gal578fec1b31363.png',
          detail: 'Milford is a great shopping centre based around the former seaside settlement famous for it\'s Saturday night dances at the Pirate Ship dance hall. With close to 300 businesses in the district, we\'re sure we have something for everyone. From cafes and boutique clothing stores, specialty cheese stores through to hardware stores, Milford really does cover it all.'
        },
        {
          heading: 'Milford Shopping Centre, Milford\n',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Shopping/old_mall_hr.jpg',
          detail: 'The Milford Centre is located in the heart of Milford, with entrances off Milford\'s main road (Kitchener Road), Milford Road and Ihumata Road. Here you will find Auckland\'s top shops in one beautiful location with over 700 carparks.\n' +
              '\n' +
              'The Milford Centre offers variety and convenience shopping for beautiful gifts, places to eat and the latest in fashion & homewares.\n' +
              '\n' +
              'A short walk away is Milford Beach, Reserve and Marina.'
        }
      ],
    }
  },
  mounted() {
    this.region = this.$route.meta.region;
  }
}
</script>