<template>
  <div id="app">
      <keep-alive exclude="Detail">
        <router-view></router-view>
      </keep-alive>
    <main-tar-bar class="tabber"></main-tar-bar>
  </div>
</template>

<script>
   import MainTarBar from 'components/content/mainTarBar/MainTarBar'

export default {
  name: 'App',
  components: {
     MainTarBar
  }
}
</script>

<style>
@import "assets/css/base.css";

</style>
