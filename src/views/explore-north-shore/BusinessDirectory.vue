<template>
  <div class="page page--item-list">
    <div class="page-heading">Business Directory</div>
    <div class="page-header">We have all the services you need.</div>
    <ItemInput v-if="edit" @onsubmit="handleOnSubmit"></ItemInput>
    <div class="item-list item-list--business">
      <BusinessCard
        v-for="(item, index) in listItems"
        :key="item.id"
        :index="index"
        :image="item.imageUrl"
        :to="`/explore-north-shore/explore/business-page/${item.id}`"
        :title="item.title"
        :phone="item.phone"
        :link="item.link"
        :address="item.address"
        :class="classObject"
        :backgroundColor="backgroundColor"
        :id="item.id"
        :edit="edit"
        @on_edit="handleEdit"
        @on_remove="handleRemove"
      ></BusinessCard>
    </div>
    <modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <h3>Edit Card</h3>
      </template>
      <template #body>
        <div class="form">
          <div class="inputs">
            <label for="ftitle">Title:</label>
            <input v-model="title" id="ftitle" placeholder="Title" /><br />
            <label for="fphone">Phone:</label>
            <input
              v-model="phone"
              id="fphone"
              placeholder="phone number"
              size="10"
            /><br />
            <label for="flink">Link:</label>
            <input v-model="link" id="flink" placeholder="link" /><br />
            <label for="faddress">Address:</label>
            <input
              v-model="address"
              id="faddress"
              placeholder="address"
              size="50"
            /><br />
            <label for="fimage">Image:</label>
            <textarea v-model="image" id="fimage" placeholder="image" cols="50" rows="5"/>
          </div>
          <img :src="image" width="600">
        </div>
        <div>
          <storage-view
            height="480"
            :controller.prop="storage_controller"
            @selected-changed="selected_file_changed"
          ></storage-view>
          <upload-view :controller.prop="upload_controller"></upload-view>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
//import { getCache, setCache } from "@/services/cache";
import BusinessCard from "../BusinessDirectoryCard";
import ItemInput from "../item-input";
import modal from "../../modal";
import { inject } from "vue";
import { StorageView } from "@kevinldonnelly/storage-view-controllers";
import { StorageUploadView } from "@kevinldonnelly/storage-view-controllers";
customElements.define("storage-view", StorageView);

customElements.define("upload-view", StorageUploadView);

export default {
  setup() {
    const crudprovide = inject("crudprovide");
    const storagecontroller = inject("storagecontroller");
    const edit = inject("edit");
    return {
      crudprovide,
      storagecontroller,
      edit,
    };
  },
  components: { BusinessCard, ItemInput, modal },
  // inject: ["crudprovide"],
  data() {
    return {
      listItems: [
        {
          title: "Loading...",
        },
      ],
      classObject: "page-block page-block--main",
      backgroundColor: "#598d16",
      isModalVisible: false,
      edit_key: "config",
      edit_index: -1,
      storage_controller: {},
      upload_controller: {},
      image: {},
    };
  },
  mounted() {
  

    if (this.edit) {
      this.classObject = "page-block page-block--main";
    } else {
     
      this.classObject = "";
    }
    this.storage_controller = this.storagecontroller;
    this.upload_controller = this.storagecontroller;
    const sv = document.querySelector("storage-view");

    sv.addEventListener("selected-changed", (event) => {
      this.selected_file_changed(event);
    });

    this.crudprovide.ReadAll("Auckland/NorthShore/Business", (list) => {
      list.forEach((element) => console.log(element));
      this.listItems = list;
    });
  },
  methods: {
    selected_file_changed: function (event) {
      console.log(event);
      this.storage_controller.FullPath(event.detail, (url) => {
        this.image = url;
      });
    },
    handleOnSubmit(e) {
      //  this.list = [...this.list, { text: e.detail[0], checked: false }];
      console.log("handleOnSubmit " + e);
      var key = e.replace(/\s+/g, "-").toLowerCase();
      let value = {
        id: key,
        phone: "123456789",
        link: `http://www.${key}.co.nz`,
        address: "undefined",
        imageUrl: "undefined",
        title: e,
      };

      this.crudprovide.Update(
        "Auckland/NorthShore/Business",
        key,
        value,
        (result) => {
          console.log(result);
          this.listItems.push(value);
        }
      );
    },
    closeModal() {
      this.isModalVisible = false;
      let newValue = {
        phone: this.phone,
        link: this.link,
        address: this.address,
        imageUrl: this.image,
        title: this.title,
        id: this.edit_key,
      };
      console.log(this.edit_key);
      console.log(newValue);

      this.crudprovide.Update(
        "Auckland/NorthShore/Business",
        this.edit_key,
        newValue,
        (result) => {
          console.log(result);

          this.listItems[this.edit_index] = newValue;
        }
      );
    },
    handleRemove(e) {
      //  const index = parseInt(e.detail[0]);
      //this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
      console.log("handleRemove ");
      console.log(e);
    },
    handleEdit(e) {
      console.log("handleedit");

      //  if(e===undefined)return;
      console.log(e);
      this.edit_key = e.id;
      this.edit_index = e.index;
      this.isModalVisible = true;
      this.title = e.title;
      this.address = e.address;
      this.phone = e.phone;
      this.link = e.link;
      this.image = e.image;
    },
  },
};
</script>