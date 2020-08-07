<template>
  <div>
    <nav-bar class="profile-bar"><div slot="center">嗨购商城</div></nav-bar>
    <user-info></user-info>

    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <view-list></view-list>
    <service-list></service-list>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import UserInfo from "./childernComps/UserInfo";
  import ViewList from "./childernComps/ViewList";
  import ServiceList from "./childernComps/ServiceList";
  export default {
    name: "Profile",
    components: {
      NavBar,
      UserInfo,
      ViewList,
      ServiceList
    },
    data() {
      return {

        serviceList: [
          {
            imgURL : '../../assets/img/profile/categories.png',
            title: '我的购物车'
          },
          {
            imgURL : '../../assets/img/profile/update(1).png',
            title: '下载购物车APP'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .profile-bar {
    background-color: var(--color-text);
    color: white;
  }

  .account {
    display: flex;
    border-bottom: 15px solid #f2f2f2;
  }

  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
    border-right: 2px solid #f7f4f6;
  }

  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;

  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }

</style>
