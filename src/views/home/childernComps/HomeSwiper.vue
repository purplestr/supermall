<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" >
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>

</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    data() {
      return {
        ifLoad: false
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperImageLoad() {
        if(!this.ifLoad) {
          this.$emit('swiperImageLoad')
        }
        this.ifLoad = true;
      }
    }
  }
</script>

<style scoped>

</style>
