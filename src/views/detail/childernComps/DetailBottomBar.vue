<template>
<div class="bottom-bar">
  <div class="bottom-left">
    <div class="bar-item">
      <img src="~assets/img/detail/icon01.png" alt=""></img>
      <div>
        <span>客服</span>
      </div>

    </div>
    <div class="bar-item">
      <img src="~assets/img/detail/icon02.png" alt=""></img>
      <div>
        <span>店铺</span>
      </div>
    </div>
    <div class="bar-item">
      <img src="~assets/img/detail/icon03.png" alt=""></img>
      <div>
        <span>收藏</span>
      </div>
    </div>
</div>
  <div class="bottom-right">
    <div class="shopping" @click="shoppingClick">
      <span>加入购物车</span></div>
    <div class="buy"><span> 购买</span></div>
  </div>

</div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      shoppingClick() {
        this.$emit('addToCate')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    height: 49px;
    position: relative;
    background-color: #fff;
    padding: 0px 3px 0px 10px;

  }
  .bottom-left {
    flex: 1;
    display: flex;
    padding-top: 8px;
    padding-bottom: 5px;
  }
  .bar-item {
    flex: 1;
    font-size: 14px;
  }
  .bar-item img {
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
  .bottom-right {
    flex: 1;
    display: flex;
    text-align: center;
  }
  .bottom-right span{
    display: inline-block;
    padding-top: 15px;
  }
  .shopping {
    flex: 2;
    background-color: #ffdd12;
    color: black;
  }
  .buy {
    flex: 1;
    background-color: var(--color-high-text);
    color: #fff;
  }

</style>
