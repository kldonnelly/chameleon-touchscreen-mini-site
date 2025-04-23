

import Home from '../views/Home.vue'
import ExploreNorthShore from '../views/ExploreNorthShore.vue';
import Explore from '../views/explore-north-shore/Explore.vue';
import Beaches from '../views/explore-north-shore/Beaches.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/public-transport',
    name: 'Public Transport',
    component: () => import('../views/PublicTransport.vue')
  },
  {
    path: '/ateed',
    name: 'Auckland Tourism Events and Economic Development',
    component: () => import('../views/ATEED.vue')
  },
  {
    path: '/explore-north-shore',
    name: 'Explore North Shore',
    component: ExploreNorthShore
  },
  {
    path: '/explore-north-shore/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/explore-north-shore/explore/beaches',
    name: 'Beaches',
    component: Beaches
  },
  {
    path: '/explore-north-shore/explore/business-directory',
    name: 'Business Directory',
    component: () => import('../views/explore-north-shore/BusinessDirectory.vue')
  },
  {
    path: '/explore-north-shore/explore/business-page/:businessAlias',
    name: 'Business Page',
    component: () => import('../views/explore-north-shore/BusinessPage.vue')
  },
  {
    path: '/explore-north-shore/explore/lifestyle',
    name: 'Lifestyles',
    component: () => import('../views/explore-north-shore/Lifestyles.vue')
  },
  {
    path: '/explore-north-shore/explore/lifestyle/parks-and-reserves',
    name: 'Parks',
    component: () => import('../views/explore-north-shore/Parks.vue')
  },
  {
    path: '/explore-north-shore/explore/lifestyle/sports-and-recreation',
    name: 'Recreation',
    component: () => import('../views/explore-north-shore/Recreation.vue')
  },
  {
    path: '/explore-north-shore/explore/lifestyle/walking',
    name: 'Walking',
    component: () => import('../views/explore-north-shore/Walking.vue')
  },
  {
    path: '/explore-north-shore/explore/lifestyle/tours-and-trips',
    name: 'Tours',
    component: () => import('../views/explore-north-shore/Tours.vue')
  },
  {
    path: '/explore-north-shore/explore/lifestyle/arts-culture-and-heritage',
    name: 'Tours',
    component: () => import('../views/explore-north-shore/Arts.vue')
  },
  {
    path: '/explore-north-shore/eat-and-drink',
    name: 'Eat and Drink',
    component: () => import('../views/explore-north-shore/EatAndDrink.vue')
  },
  {
    path: '/explore-north-shore/explore/shopping',
    name: 'Shopping',
    component: () => import('../views/explore-north-shore/Shopping.vue')
  },
  {
    path: '/explore-north-shore/top-10',
    name: 'Top 10',
    component: () => import('../views/explore-north-shore/Top10.vue'),
    props: {region: 'top-10'}
  },
  {
    path: '/explore-north-shore/events',
    name: 'Events',
    component: () => import('../views/explore-north-shore/Events.vue')
  },
  {
    path: '/explore-north-shore/events/takapuna',
    name: 'Takapuna Events',
    props: {region: 'takapuna',},
    component: () => import('../views/explore-north-shore/EventList.vue')
  },
  {
    path: '/explore-north-shore/events/milford',
    name: 'Milford Events',
    props: {region: 'milford',},
    component: () => import('../views/explore-north-shore/EventList.vue')
  },
  {
    path: '/explore-north-shore/events/devonport',
    name: 'Devonport Events',
    props: {region: 'devonport',},
    component: () => import('../views/explore-north-shore/EventList.vue')
  },
  {
    path: '/region-vouchers',
    name: 'Region Vouchers',
    component: () => import('../views/voucher/GiftVouchers.vue')
  },
  {
    path: '/gift-vouchers',
    name: 'Gift Voucher Regions',
    component: () => import('../views/voucher/VoucherRegions.vue')
  },
  {
    path: '/gift-vouchers/request',
    name: 'Request Gift Vouchers',
    component: () => import('../views/voucher/RequestVoucher.vue')
  },
];
export default routes;

