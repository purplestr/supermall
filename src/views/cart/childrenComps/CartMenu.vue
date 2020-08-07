<template>
  <scroll class="menu-scroll">
    <div class="cart-menu">
      <div class="cart-menu-item" v-for="(item , index) in categories"
           :key="index"
           @click="itemClick(index)"
           :class="{active: currentIndex == index }">
        {{item.title}}
      </div>
    </div>
  </scroll>

</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CartMenu",
    data() {
      return {
        currentIndex: 0 ,
      }
    },
    props:{
      categories: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Scroll
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index ;
        this.$emit('itemClick',index)

      }
    }
  }
</script>

<style scoped>
  .menu-scroll {
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
  .cart-menu {
    background-color: #f6f6f6;
    box-sizing: border-box;
    height: 100%;
    width:100px;
    overflow: hidden;
  }
  .cart-menu-item {
    height: 40px;
    line-height: 40px;
    text-align: center;

  }
  .active {
    color: var(--color-high-text);
    border-left: 5px solid var(--color-high-text);
  }
</style>
