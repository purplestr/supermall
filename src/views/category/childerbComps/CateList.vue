<template>
  <div class="content-box">
    <scroll class="content">
      <cate-list-item v-for="(item , index) in cateItem" :product="item" :key="index"></cate-list-item>
    </scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from "components/common/scroll/Scroll";
  import CateListItem from "./CateListItem";
  export default {
    name: "CateList",
    computed: {
      ...mapGetters(["cateItem"])
    },
    components: {
      Scroll,
      CateListItem
    }
  }
</script>

<style scoped>
  .content-box {
    height: 100%;
  }

  .content {
    height: 100%;
  }

</style>
