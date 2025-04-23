<template>
    <div class="page-block page-block--secondary page-block--download page-block--main" :style="{ backgroundColor: backgroundColor }">
      <img class="download__qr-wrapper" :src="src"/>
      <div class="download__wording">
        <div class="download__wording__heading">
          Scan to visit this site
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "QRCodeCard",
  props: ["backgroundColor","src"],
};
</script>