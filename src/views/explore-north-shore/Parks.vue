<template>
  <div class="page page--item-list">
    <div class="page-heading">
      Parks & Reserves
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
          heading: 'Maungauika/North Head Historic Reserve',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/NthHeadGun2.jpg',
          detail: 'Offering spectacular views of the Waitematā Harbour and Islands of the Hauraki Gulf is the strategically located Maungauika with its long history, first of Maori occupation, and then as a fortification, it is considered the most significant coastal defence site in New Zealand, due to the size, and variety of its defence installations that span almost 120 years.'
        },
        {
          heading: 'Fort Takapuna Historic Reserve',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/takapuna_03.jpg',
          detail: 'The O Peretu, is the ancient name of Takapuna Head/Fort Takapuna. A series of migrations, conquests, and occupations reflect the long Maori history of the area. \n' +
              '\n' +
              'The buildings on this site (close to Narrow Neck beach) form a unique historic complex containing elements from all periods of New Zealand’s coastal defense history.\n' +
              '\n'
        },
        {
          heading: 'Greville Reserve',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/spotlight-on-our-neighbourhoods-devonport-takapuna-03.jpg',
          detail: 'Located a few kilometers from Milford is Greville Reserve.  A family facility for Basketball, Cycling, Running, Scootering, Skateboarding and Walking. There\'s an all weather playing surface for both football and rugby, making this place a perfect day-in-the-park destination for active visitors of all ages.   \n' +
              '\n'
        },
        {
          heading: 'Milford Reserve ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/MilfordBeach.jpg',
          detail: 'This stunning and often unpopulated urban beach is located a short walk from the Milford shopping and hospitality area and is perfect for those looking for time-out from the bustle. Wander along to the edge of the marina, over the new foot-bridge that goes up and down to let the boats in and out, or take the kids to the new pirate park playground, or simply enjoy a walk or a swim at the beach.'
        },
        {
          heading: 'Hauraki Gulf Maritime Park',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Walking/hauraki.jpg',
          detail: 'The extraordinary natural resource that is the Hauraki Gulf Maritime Park covers an area of more than 1.2 million hectares. It incorporates five marine reserves and more than 50 islands, as well as mainland reserves, among which are Long Bay Okura Marine Reserve, Maungauika Historic Reserve and Fort Takapuna on the North Shore.  Waiheke and Rangitoto (the youngest volcano in New Zealand) are just two of the islands and are within easy access of the North Shore by ferry.\n' +
                  'The waters between Takapuna and Rangitoto Island offer some of the best sailing conditions in the world.'
        },
        {
          heading: 'Barrys Point Reserve - Takapuna',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/MilfordBeach.jpg',
          detail: 'This community recreation park is Home to Lake House Arts Centre and Golf Driving Range by Golf Warehouse.'
        },
        {
          heading: 'Devonport Domain - Devonport',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/DSC_2304.jpg',
          detail: 'Located in central Devonport the domain is home to The North Shore Bowling and Rugby Clubs and provides a connection from Devonport CBD and Takarunga/Mt Victoria to Maugauika/North Head and through to Cheltenham Beach.'
        },
        {
          heading: 'Gould Reserve - Takapuna',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/imageprocessor_http_interface.jpg',
          detail: 'Located on the foreshores of Takapuna Beach, just minutes walk from the many cafes, restaurants and shops is this world class playgrond with an all abilities playing area, including its unique water play area and stunning views out over the Hauraki Gulf to Rangitoto Island.'
        },
        {
          heading: 'JFK Memorial Park - Castor Park',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/MilfordBeach.jpg',
          detail: 'The gun emplacements and tunnels were constructed during 1941 and 1942 as part of Auckland’s World War II defenses. Join a guided tour (every second Sunday of each month between 11am and 2pm).'
        },
        {
          heading: 'Killarney Park - Takapuna',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/img_4363.jpg',
          detail: 'Nestled on the Shores of Lake Pupuke and home of The Pumphouse Theatre and cafe.  Kilarney Park is home to a vibrant community of birds, including ducks, geese and swans and offers a very romanic and picturesque location just a few minutes walk from central Takapuna.'
        },
        {
          heading: 'Sylvan Park - Milford',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/IMG_14901.jpg',
          detail: 'Located on the Northern shores of Lake Pupuke, close to both Milford and Takapuna and home to Mad Loop Windsurfing School and the annual Christmas in the Park event. Sylvan park offers the  perfect spot to relax or try your hand at some lake Fishing or Watersports.'
        },
        {
          heading: 'Sunnynook Park - Sunnynook ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/MilfordBeach.jpg',
          detail: 'Home to the Glenfield Greyhounds Rugby League Club, this large popular community park with playgrounds and Skate area and is located close to a bus station and shopping areas of Link Drive and Sunnynook.'
        },
        {
          heading: 'Takarunga/Mount Victoria - Devonport ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/mt-victoria_wem_4051_screen.jpg',
          detail: 'Once a Māori pā (coastal defense site or village), Mount victoria is a short walk from the Devonport Wharf and Ferry Terminal, along Victoria Road. Offering 3600 views of Auckland’s skyline, the Waitematā Harbour and Hauraki Gulf and Islands. The walk to the summit is worth it.'
        },
        {
          heading: 'Woodall Park - Narrow Neck ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Reserves/10036899.jpg',
          detail: 'Located between Narrow Neck Beach on one side and the Waitemata Golf Course on the other, Woodall Park is a favourite spot among locals, particularly on a warm sunny day.'
        }
      ],
    }
  },
  mounted() {
    this.region = this.$route.meta.region;
  }
}
</script>