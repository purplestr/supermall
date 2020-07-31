
<template>
  <Swiper >
    <swiper-item v-for="item in topImages" class="detail-swiper">
      <img :src="item" alt="">
    </swiper-item>
  </Swiper>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper/index";
  export default {
    name: "detailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type:Array,
        default() {
          return []
        }
      }
    }

  }
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
