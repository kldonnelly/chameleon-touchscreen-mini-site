<template>
  <EditCard
    :edit="edit"
    :backgroundColor="backgroundColor"
    :classObject="classObject"
    @onedit="onedit"
    @onremove="handleOnRemove"
  >
    <router-link style="display: inline-block; text-decoration: none" :to="to">
      <div class="page-block__icon">
        <img :src="image" alt="" />
      </div>

      <div class="page-block__heading">
        {{ heading }}
      </div>
    </router-link>
  </EditCard>
</template>

<script>
import EditCard from "./EditCard.vue";

export default {
  name: "HomeCard",
  props: ["index", "to", "image", "heading", "backgroundColor", "edit"],
  components: { EditCard },
  data() {
    return {};
  },
  methods: {
    onedit() {
      this.$emit("onedit", this.to);
    },
    handleOnRemove() {
      this.$emit("onremove", this.to);
    },
  },
};
</script>