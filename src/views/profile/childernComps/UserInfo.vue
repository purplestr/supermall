<template>
  <div class="user-info">
    <a href="#" class="clear-fix">
        <div class="privateImage-svg left">
          <img src="~assets/img/profile/picture.png" alt="">
        </div>

      <div class="login-info left">
        <slot name="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span >
              <img src="~assets/img/profile/phone.png">
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <img class="arrow right" src="~assets/img/profile/right_arrow.png">
    </a>
  </div>
</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  .user-info {
    padding: 15px;
    margin-top: -5px;
    height: 70px;
    background-color: var(--color-text);
  }

   .privateImage-svg {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }

  .privateImage-svg img {
    width: 60px;
    height: 60px;
  }

  .left {
    float: left;
  }

  #user-info .arrow-svg {
    width: 11px;
    height: 22px;
    margin-top: 18px;
  }

.login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }

  #user-info .login-info .phone {
    position: relative;

    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }

  #user-info .login-info .phone .icon-mobile {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }

  .phone {
    font-size: 12px;
  }
  .phone img {
    height: 20px;
    width: 20px;
  position: relative;
    bottom: -5px;

  }

  .arrow {
    position: absolute;
    right: 15px;
    height: 35px;
    top: 65px;
    width: 35px;
  }
</style>
