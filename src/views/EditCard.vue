<template>
  <div :class="classObject" :style="{ backgroundColor: backgroundColor }">
    <img
      class="edit"
      v-if="edit"
      :src="image_edit"
      @click="handleOnEdit"
      style="top: 0px; left: 0px; position: absolute"
    />
    <slot></slot>
    <button
      class="destroy"
      style="bottom: 0px; right: 0px; position: absolute"
      v-if="edit"
      @click="handleOnRemove"
    >
      x
    </button>
  </div>
</template>

<script>
export default {
  name: "EditCard",
  props: ["edit", "backgroundColor", "classObject"],
  data() {
    return {
      image_edit: require("../assets/icons/edit/materialicons/24px.svg"),
    };
  },
  methods: {
    handleOnEdit() {
      this.$emit("onedit");
    },
    handleOnRemove() {
      this.$emit("onremove");
    },
  },
};
</script>

<style>
.edit {
  background: none;
  color: #9acca1;
  fill: aqua;
}
.destroy {
  background: none;
  color: #cc9a9a;
  transition: color 0.2s ease-out;
}
.destroy:hover {
  color: #af5b5e;
}
</style>