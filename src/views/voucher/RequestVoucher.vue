<template>
  <div class="page">
    <div id='woobox-root'></div>
    <div class="woobox-offer" data-offer="cyyjo4" data-trigger="enter"></div>
  </div>
</template>

<script>
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://woobox.com/js/plugins/woo.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'woobox-sdk'));
</script>

<style type="text/css">
.woobox-offer {
  background: #fff;
}
</style>