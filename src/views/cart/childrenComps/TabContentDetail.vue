<template>
  <div>
    <goods :goods = detailGoods></goods>
  </div>
</template>

<script>
  import Goods from "components/content/goods/Goods";
  export default {
    name: "TabContentDetail",
    components: {
      Goods
    },
    props: {
      detailGoods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
