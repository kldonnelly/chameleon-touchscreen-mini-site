<template>
  <div class="page page--item-list">
    <div class="page-heading">
      Sports and Recreation
    </div>
    <div class="page-header">
      Loved by its residents for its outdoor lifestyle, connection with the environment and healthy way of life, it's no surprise to learn that the area offers a great range of sports and recreation clubs, grounds and facilities.
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
          heading: 'Boating & Watersports',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/TakapunaBeachYachts.jpg',
          detail: 'Boating, Ocean Swimming,  Sailing, Kayaking, Surfing, Stand-Up Paddleboarding (SUP), Kite Surfing, Wind Surfing, Diving or Fishing. There are plenty of opportunities to get out of the waters of Lake Pupuke and The Hauraki Gulf.  You can hire equipment and arrange lessons with the local experts.'
        },
        {
          heading: 'Bowls',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/va-vg-lawn-bowling-club-bids-farewell-to-williamsburg-inn-green-20160507.jpg',
          detail: 'Lawn Bowls is sport increasingly popular with young as well as older players.'
        },
        {
          heading: 'Cricket',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/C3jpdW0VMAAuubD.jpg',
          detail: 'A very popular summer sport in New Zealand. With the following clubs in the area'
        },
        {
          heading: 'Croquet',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/Croquet.png',
          detail: ''
        },
        {
          heading: 'Cycling',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Walking/Devonport-to-Takapuna-Green-route-5.jpg',
          detail: 'Bikes maybe taken onto the Ferries without any additional charge.  Cycling from Devonport to Takapuna and on to Milford using the Green Route is an ideal way to explore the area.  Check out the following route maps'
        },
        {
          heading: 'Fishing',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/Fishing.png',
          detail: 'The Waitemata Harbour and The Hauraki Gulf are a great day out regardless of whether you catch a fish or not (though the chances are you will). If you dont have access to a boat or kayak, then try fishing off one of the many wharves or at Lake Pupuke (a licence will be needed for Lake fishing and can be purchased at most fishing retailers or online - SEE HERE). Find news, advice, photos, videos, and a discussion forum to help you enjoy your North Shore fishing experience.'
        },
        {
          heading: 'Golf ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Golf/Pupuke%20golf%20club.png',
          detail: 'Pupuke Golf Club is located a few kilometers North of Milford and allows golfers to play a challenging par 70, 18 hole course and enjoy spectacular views across the Hauraki Gulf to Rangitoto Island.  With food outlets in the lounge and an onsite bar, it\'s a great place to recover from a game.\nTakapuna Golf Course, 2km north of Takapuna CBD and close to Smales Farm bus station, offers a par 71, 18-hole course and driving range.  The 220 metre double-storey floodlit driving range has 48 covered bays and is open until 11pm every night.\nWaitemata Golf Club is close to the Historic Devonport Village as well as Cheltenham and Narrow Neck beaches and Woodall Park. The par 69 -18 hole course is flat and quite narrow (it was once a horse racing track), and offers beautiful parklike surrounds.'
        },
        {
          heading: 'Mini Golf ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Golf/Gloputt%20mini%20golf%20.png',
          detail: 'GLOPUTT MINIGOLF Auckland\'s first amazing and bizarre new world of glow in the dark minigolf.\n' +
              '\n' +
              'Now offer 16 holes with buildings, foliage, pathways and fairways illuminated with glowing technicolour , your outing becomes a really unique and memorable event for all.'
        },
        {
          heading: 'Rugby ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/Rugby.png',
          detail: 'Rugby is New Zealand’s national sport and New Zealanders are universally proud of its tradition and success upon the field.'
        },
        {
          heading: 'Squash ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/Squash%2022.jpg',
          detail: ''
        },
        {
          heading: 'Swimming ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/Takapuna%20pool.png',
          detail: 'Located a short walk from the Takapuna CBD is the Takapuna Pool & Leisure Centre to enjoy recreational indoor swimming, or fitness.'
        },
        {
          heading: 'Tennis ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/tennis-img.jpg',
          detail: 'There are a number of tennis clubs in the area, as well as free community courts such as the one at Takarunga/Mount Victoria, Devonport and also in Woodall Park,  Narrow Neck.'
        },
        {
          heading: 'Walking ',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/facts-bg.jpg',
          detail: 'There are plenty of wonderful self guided walks around the North Shore.'
        }
      ],
    }
  },
  mounted() {
    this.region = this.$route.meta.region;
  }
}
</script>