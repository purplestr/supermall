<template>
  <div class="tab-content-cart">
    <div class="sub-cart-item" v-for="(item,index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" class="item-img">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabContentCart",
    props: {
      subcategories: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.tab-content-cart {
  width: calc(100vw - 100px);
  display: flex;
  flex-wrap: wrap;
  /*padding: 15px 0px 0px 20px;*/
  padding-top: 15px;

}
.sub-cart-item {
  flex: 1;
  padding-bottom: 10px;
  text-align: center;
  font-size: 12px;
}
  .item-img {
    height: 75px;
    width: 75px;
    padding-bottom: 3px;
  }
  .item-text {

  }
</style>
