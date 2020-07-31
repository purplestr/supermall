<template>
  <div id="detail">
    <detail-nav-bar class="detail-Bar" @itemClick="titleClick" ref="detailNavBar"></detail-nav-bar>
    <Scroll class="detail-content" ref="scroll" @scroll="currentPosition" :probe-type = '3'>
      <detail-swiper :top-images="topImages" >
      </detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"/>
      <detail-goods-Info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-Info>
      <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
     <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommentsInfo" ref="recommend"></goods-list>
    </Scroll>
    <back-top @click.native="backTopClick" v-show="backTopShow"></back-top>
    <detail-bottom-bar @addToCate="addToCate"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from "./childernComps/DetailNavBar";
  import DetailSwiper from "./childernComps/DetailSwiper";
  import DetailBaseInfo from "./childernComps/DetailBaseInfo";
  import DetailShopInfo from "./childernComps/DetailShopInfo";
  import DetailGoodsInfo from "./childernComps/DetailGoodsInfo";
  import DetailParamInfo from "./childernComps/DetailParamInfo";
  import DetailCommentInfo from "./childernComps/DetailCommentInfo";
  import DetailBottomBar from "./childernComps/DetailBottomBar";

  import GoodsList from "components/content/goods/Goods";
  import {detailRequest, Goods, Shop ,GoodsParam ,getCommend} from "network/detail";
  import Scroll from "components/common/scroll/Scroll";
  import {itemListenerMixin,backTopMixin} from 'common/mixin'
  import {debounce} from "common/utils";


  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      GoodsList,
      Scroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
         commentInfo: {},
        recommentsInfo: [],
        navScrollYs:[],
        getNavScrollYs: null,
        currentIndex: 0

      }
    },
    methods: {
      imageLoad() {
        this.newRefresh();
        this.getNavScrollYs()
      },
      titleClick(index) {
        console.log(index)
        console.log(this.navScrollYs)
        this.$refs.scroll.scrollTo(0,-this.navScrollYs[index],100)
      },
      currentPosition(position) {
        const positionY = -position.y
        let length = this.navScrollYs.length;
        for(let i=0 ; i < length-1 ; i++) {
          if(this.currentIndex !== i && (positionY >= this.navScrollYs[i] && positionY < this.navScrollYs[i+1])) {
            this.currentIndex = i;
            this.$refs.detailNavBar.currentIndex = this.currentIndex;

          }
        }
        //判断BackTop是否显示
        this.isBackTopShow(position);
      },
      addToCate() {
        console.log('addToCate');
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        this.$store.dispatch('addCate',product)
      }

    },
    mixins: [itemListenerMixin,backTopMixin],
    created() {


      //获取商品iid
      this.iid = this.$route.params.iid

      //发送请求
      detailRequest(this.iid).then((res) => {
        //1.获取顶部轮播图片
        // console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //6.获取评论信息
        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0];
          console.log(this.commentInfo);

          this.getNavScrollYs = debounce(() => {
            this.navScrollYs = [];
            this.navScrollYs.push(0);
            this.navScrollYs.push(this.$refs.param.$el.offsetTop);
            this.navScrollYs.push(this.$refs.comment.$el.offsetTop);
            this.navScrollYs.push(this.$refs.recommend.$el.offsetTop);
            this.navScrollYs.push(Number.MAX_VALUE);

          },100)

        }
      })

      //获取推荐信息
      getCommend().then(res => {
        console.log(res)
        this.recommentsInfo = res.data.list;
        console.log(this.recommentsInfo);
      })

    },
    destroyed() {
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    }
  }
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: 100vh;
}
.detail-Bar {
  position: relative;
  z-index: 11;
  background-color: #fff;
}
  .detail-content {
    height: calc(100% - 44px - 49px );
  }
</style>
