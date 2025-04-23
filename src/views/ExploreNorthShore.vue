<template>
  <div class="page page--explore">
    <router-link to="/explore-north-shore/events" class="page-block page-block--main" style="background-color: #2D88BC">
      <div class="page-block__icon"><img src="../assets/icons/balloon.svg" alt=""></div>
      <div class="page-block__heading">Events</div>
    </router-link>
    <router-link to="/explore-north-shore/explore" class="page-block page-block--main" style="background-color: #83c815">
      <div class="page-block__icon"><img src="../assets/icons/map.svg" alt=""></div>
      <div class="page-block__heading">Explore</div>
    </router-link>
    <router-link to="/explore-north-shore/eat-and-drink" class="page-block page-block--main" style="background-color: #f3bc19">
      <div class="page-block__icon"><img src="../assets/icons/burger.svg" alt=""></div>
      <div class="page-block__heading">Eat and Drink</div>
    </router-link>
    <router-link to="/explore-north-shore/top-10" class="page-block page-block--main" style="background-color: #e77843">
      <div class="page-block__icon"><img src="../assets/icons/check.svg" alt=""></div>
      <div class="page-block__heading">Top 10</div>
    </router-link>
  </div>
</template>

<script>
export default {
    name: "ExploreNorthShore",
   
  
}
</script>


