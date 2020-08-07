<template>
  <div class="views">
    <div  class="list-item">
      <div class="list-img">
        <img src="~assets/img/profile/categories.png" alt="">
      </div>
      <div class="title">我的购物车</div>
    </div>
    <div  class="list-item">
      <div class="list-img">
        <img src="~assets/img/profile/update (1).png" alt="">
      </div>
      <div class="title" >下载购物车APP</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ServiceList"
  }
</script>

<style scoped>
  .views {
  }

  .list-item {
    height: 50px;
    border-bottom: 2px solid #f7f4f6;
    overflow: hidden;
    position: relative;
  }
  .list-img {
    position: absolute;
    left: 15px;
    top: 15px;

  }
  .list-img img {
    height: 20px;
    width: 20px;

  }
  .title {
    position: absolute;
    left: 45px;
    top: 15px;
  }
</style>
