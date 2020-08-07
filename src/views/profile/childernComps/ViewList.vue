<template>
  <div class="views">
    <div  class="list-item">
      <div class="list-img">
      <img src="~assets/img/profile/news (1).png" alt="">
      </div>
      <div class="title"> 我的消息</div>
    </div>
    <div  class="list-item">
      <div class="list-img">
        <img src="~assets/img/profile/score.png" alt="">
      </div>
      <div class="title" >积分商城</div>
    </div>
    <div  class="list-item">
      <div class="list-img">
      <img src="~assets/img/profile/superUser.png" alt="">
      </div>
      <div class="title" >会员卡</div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "ViewList",

  }
</script>

<style scoped>
  .views {
    border-bottom: 15px solid #f2f2f2;
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
