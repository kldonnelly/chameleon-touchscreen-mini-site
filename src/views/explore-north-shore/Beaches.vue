<template>
  <div class="page page--item-list">
    <div class="page-heading">Beaches</div>
    <div class="page-header">
      North Shore beaches are among the best in the country. They're family
      friendly, easily accessed, lively and much loved. They're the perfect
      place to relax and enjoy the clear waters of the Waitematā Harbour and
      Haruaki Gulf. The coastal walk from Devonport to Takapuna provides access
      to secluded bays and beaches that can only be reached an hour or two
      either side of low tide. There will be plenty of time for peace and
      tranquility, with the comfort of knowing that there are Cafés, shops and
      restaurants only a few minutes away.
    </div>
    <div class="item-list item-list--image-dominant">
      <div v-for="item in events" class="list-item" :key="item.heading">
        <div
          class="list-item__thumbnail"
          :style="`background-image: url(${item.thumbnail})`"
        ></div>
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
  name: "Beaches",
  data() {
    return {
      region: "",
      events: [
        {
          heading: "Devonport Beach and Torpedo Bay",
          thumbnail:
            "https://www.explorenorthshore.nz/media/images/Explore/Beaches/Devonport%20Beach.jpg",
          detail:
            "Just beside the ferry terminal and next to the Queens Parade Reserve is Devonport Beach, a popular spot with locals and visitor alike.  The beach is an ideal sport for a picnic and a swim.  Walk or cycle along King Edward Parade, on the edge of the Waitematā Harbour,  to Torpedo Bay, home of the Navy Museum.  A little further around the corner you will find North Head/Maungauika and the beautiful Cheltenham Beach.",
        },
        {
          heading: "Cheltenham Beach",
          thumbnail:
            "https://www.explorenorthshore.nz/media/images/Explore/Beaches/Cheltenham-beach-jpg.jpg",
          detail:
            "One of the best kept secrets of the North Shore is Cheltenham Beach offering  a stunning strip of white sand that sits right below North Head/Maungauika. The waters are lagoon-blue, perfectly clear and inviting. At the Northern end is a playground, and the popular Vauxhall Shops where you can get the finest coffee, genuine French pastry or hand made ice cream.",
        },
        {
          heading: "Narrow Neck Beach",
          thumbnail:
            "https://www.explorenorthshore.nz/media/images/Explore/Beaches/NarrowneckFullTide.jpg",
          detail:
            "Like Takapuna Beach, swimming at Narrow Neck is good at all tides, and if you time it right at the weekend, you’ll be greeted by the sight of the dozens of small yachts racing from the Wakatere Boating Club, while you enjoy a coffee from the Narrow Neck Beach Café. When the tide is low, you can walk around the cliffs at the northern end of the beach towards Takapuna and Milford, taking one - two hours.",
        },
        {
          heading: "Takapuna Beach",
          thumbnail:
            "https://www.explorenorthshore.nz/media/images/DJI_0082-24.jpg",
          detail:
            "Takapuna Beach is a 1km stretch of white sand coast line, a much loved and well utilised beach on the North Shore. The ocean is typically calm and clear and one can swim at any point in the tide. It's popular walkers, runners, paddle boarders, swimmers, boaties and surfers if the wind is right.  Running from Clifton Road, close to Hauraki Corner in the south, through to the Takapuna Boat Ramp with access to the Fossil Forest and Lava Trail.",
        },
        {
          heading: "Milford Beach",
          thumbnail:
            "https://www.explorenorthshore.nz/media/images/Explore/Beaches/S0312-hires_12228-8.jpg",
          detail:
            "Milford Beach is the quieter than its neighbouring Takapuna beach and offers the same clear waters and white sands, with normally a few less people.  The beach is located just a few minutes walk from the heart of the village.\n" +
            "\n" +
            "At the northern end of this safe and family-friendly beach you’ll find the popular Milford Reserve and Milford Marina with its foot bridge across the marina.",
        },
        {
          heading: "Castor Bay",
          thumbnail:
            "https://www.explorenorthshore.nz/media/images/IMG_6711.jpg",
          detail:
            "Castor Bay is a small sheltered cove a kilometer or so north of Milford beach, and just south of JF Kennedy Park and Campbells Bay. Castor Bay offers small, safe swimming beach, children’s playground and reserve area ideal for a picnic.",
        },
      ],
    };
  },
  mounted() {
    this.region = this.$route.meta.region;
  },
};
</script>