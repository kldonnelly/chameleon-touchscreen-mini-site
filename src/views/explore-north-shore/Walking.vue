<template>
  <div class="page page--item-list">
    <div class="page-heading">
      Walking
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
          heading: 'Devonport Heritage - Waterfront',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Devonport%20Beach%2C%20King%20Edward%20Parade_%20Photo%20by%20Kevin%20Hill(1).jpg',
          detail: 'The walk from King Edward Parade to Torpedo Bay highlights some of Devonport\'s late Victorian and Edwardian homes, as well as early commercial buildings, memorials and sites of important events.  An optional walk up Mount Maungauika/North Head could be included.'
        },
        {
          heading: 'Devonport Heritage - Victoria Road - Town Centre',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Central%20Devonport%20CBD%2017th%20November%202013.JPG',
          detail: 'The walk along Victoria Road features many late Victorian and Edwardian commercial buildings at the heart of the town centre, including The Vic, the oldest surviving purpose built cinema in the Southern Hemisphere.  An optional walk up to the summit of Takarunga/Mount Victoria could be included.'
        },
        {
          heading: 'Devonport Heritage - Our Neighborhood',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/victoria%20Rd%20looking%20to%20Mt%20Victoria%2028th%20Jan%202018%20(2).JPG',
          detail: 'This Wander through established residential streets highlights first homes of early Devonport residents, as well as the first power station, the Takarunga/Mount Victoria cemetery and some of the early churches.  The Devonport Museum and walk to the summit of Takarunga/Mount Victoria could be included.'
        },
        {
          heading: 'Devonport Heritage - Cheltenham to Fort Takapuna',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/discover-bg.jpg',
          detail: 'Starting from Torpedo Bay highlights some of Devonport\'s late Victorian and Edwardian homes, as well as commercial buildings, memorials and sites of important events.  An optional walk up Maungauika/North Head could be included.'
        },
        {
          heading: 'Devonport to Takapuna on the Green Route',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Walking/Devonport-to-Takapuna-Green-route-5.jpg',
          detail: `This Walking and Cycling route can been enjoyed by the whole family. Cycling will take approximately 40 minutes, starting at Devonport and finishing near Takapuna beach.

The journey includes paths, boardwalks and bridges weaving through parks, mangroves, and heritage streets. Along the way find a nautical-themed playground at Northboro Reserve, look for eels among the mangroves, and delve into North Shore’s history at its oldest cemetery founded in 1891.

There are short steep hills near either end of the ride. To avoid the busy Devonport shops, pass in front of New World Supermarket and walk up the ramped foot path to the top of Victoria Rd. Past Calliope Rd there is a bike lane on the footpath. At the Takapuna end riders may wish to enter the shopping area or head down to the beach.`
        },
        {
          heading: 'Lake Pupuke/Killarney and Sylvan Parks',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Walking/lake-pupuke.jpg',
          detail: 'Lake Pupuke is a heart-shaped freshwater lake, occupying a volcanic crater and within easy walking distance of both Takapuna and Milford. You can walk the approximately 6km circumference (though not all on the lakeside), in around 90 minutes, enjoying the bird life, or watching kayakers, paddle boarders and windsurfers on the lake.'
        },
        {
          heading: 'Maungauika/North Head to Takapuna Beach Beaches and Bays',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Beaches/15439892589_13f9394e29_b.jpg',
          detail: `The walk from Maungauika/North Head, along the coast to Takapuna and Milford is best explored at low tide when it is possible to complete the majority of the journey along the beaches and bays that are not accessible an hour or two after low tide.  The trip will pass along Cheltenham and Narrow Neck Beaches, through St Leonards Bay and around to Takapuna Beach.`
        },
        {
          heading: 'Takapuna - Milford Walkway',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Walking/takapuna-milford-walkway.jpg',
          detail: `A stunning walk that journey's past significant coastal architecture and geological sites all against a stunning coastal backdrop. Starting at Takapuna Beach, this trail takes approximately 2 hours at walking pace. Stopping points are highlighted and information about the area is provided.`
        },
        {
          heading: 'Te Araroa Trail',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Walking/CoastalWalkLookBack.JPG',
          detail: `The Te Araroa Trail extends over 3000km, from the top of New Zealand’s North Island to the bottom of the South Island. A 23 km long section on the North Shore extends from Long Bay to Devonport, and takes approximately seven hours to complete. For a shorter walk, you can begin at Castor Bay, just north of Milford and walk along the coast through Takapuna to Devonport.`
        },
        {
          heading: 'Heritage Trail - Takapuna, Milford, Forrest Hill',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/plaque.PNG',
          detail: `Take a step back in time literally! This unique heritage trail features plaques throughout our local area where streets were all named in honour of local residents who gave their lives for King and Empire during WW1. As a Heritage Trail it is easily accessible by foot, by car or a mixture of both, depending on your fitness level.`
        }
      ],
    }
  },
  mounted() {
    this.region = this.$route.meta.region;
  }
}
</script>