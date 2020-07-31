<template>
  <div class="cate">
    <nav-bar class="cateNavBar"><div slot="center">购物车({{cateLength}})</div></nav-bar>
    <div class="cateList">
      <cate-list></cate-list>
    </div>
    <cate-button-bar></cate-button-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CateList from "./childerbComps/CateList";
  import CateButtonBar from "./childerbComps/CateButtonBar";
  import {mapGetters} from "vuex"
  export default {
    name: "Category",
    components: {
      NavBar,
      CateList,
      CateButtonBar
    },
    computed: {
      //两种语法
      ...mapGetters(["cateLength"])
      // ...mapGetters({
      //   length: 'cateLength'
      // })
    }
  }
</script>

<style scoped>
  .cate {
    height:100vh
  }
.cateNavBar {
  background-color: var(--color-text);
  color: var(--color-background);
}
  .cateList {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>
