<template>
  <div class="page page--item-list">
    <div class="page-heading">
      Art, Culture and Heritage
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
          heading: 'Devonport Museum',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Art%20and%20Culture/img_0749.jpg',
          detail: 'Tucked away in Cambria Reserve, this volunteer-run museum is housed in a quaint heritage listed building. This small museum, located in Cambria Reserve, specialises in memorabilia, photographs and records of the history of Devonport. For opening hours and further information.'
        },
        {
          heading: 'Torpedo Bay Navy Museum, Devonport',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Art%20and%20Culture/226767-5433-14.jpg',
          detail: 'The National Museum of the Royal New Zealand Navy is the guardian of its memory. Within walking distance of Devonport village, it provides a rich overview of the history and wartime service of the New Zealand Navy and its personnel.'
        },
        {
          heading: 'The Vic, Devonport',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/cinema-victoria-logo.png',
          detail: 'A beautiful historic cinema and live event venue located in the heart of Devonport. Check out current movies and performances and make your booking.'
        },
        {
          heading: 'Berkeley Cinema, Takapuna',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Sports%20and%20recreation/Berkeley-cinemas.png',
          detail: 'Berkeley Takapuna is a 4-screen cinema complex with licensed theatre and 3D capability. Take advantage of amazing discounts from Sunday to Wednesday.  More information and bookings.'
        },
        {
          heading: 'Bruce Mason Centre, Takapuna',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Art%20and%20Culture/bmc-hero.jpg',
          detail: 'The premier performing arts venue on the North Shore, with an 1100 seat auditorium, exhibition and conference and event spaces. Choose from a huge vaerity of shows and performances that include art exhibitions, big bands, comedy, dance, music and theatre.'
        },
        {
          heading: 'Lake House Arts Centre, Takapuna',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Art%20and%20Culture/lakehouse-arts-centre.jpg',
          detail: 'The Lake House Arts Centre, based in the lovely old historic Lake House building, which was moved to its present site from Takapuna Beach, presents exhibitions, events, and classes for all ages and levels of arts experience.'
        },
        {
          heading: 'The PumpHouse Theatre, Lake Pupuke, Takapuna',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Art%20and%20Culture/The_old_pumphouse_at_Lake_Pupuke.jpg',
          detail: 'Named for its early incarnation as the pumphouse for the North Shore’s water system, this beautifully restored venue sits on the edge of Lake Pupuke and is an intimate space that features local professional and amateur theatre, music and comedy performances.'
        },
        {
          heading: 'JF Kennedy Memorial Park, Castor Bay/Milford',
          thumbnail: 'https://www.explorenorthshore.nz/media/images/Explore/Art%20and%20Culture/1.jpg',
          detail: 'The gun emplacements and tunnels were constructed during 1941 and 1942 as part of Auckland’s World War II defenses. Join a guided tour (every second Sunday of each month between 11am and 2pm).'
        }
      ],
    }
  },
  mounted() {
    this.region = this.$route.meta.region;
  }
}
</script>