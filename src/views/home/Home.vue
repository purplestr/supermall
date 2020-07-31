<template>
  <div id="home">
    <div class="home-nav">
      <NavBar ><div slot="center">购物街</div></NavBar>
    </div>
    <tab-control :titles="['流行' , '新款' , '精选']" @tabClick="tabClick"
                 class="tab-control" v-show="isTabFixed" ref="tabControl1"></tab-control>
   <scroll class="content" ref="scroll"
           :probe-type="3"
           @scroll="contentScroll"
           :pull-up-load="true"
           @pullingUp="LoadMore"
            >
     <home-swiper :banners="banners"  id="home-swiper" @swiperImageLoad = "swiperImageLoad"></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
     <feature-view></feature-view>
       <tab-control :titles="['流行' , '新款' , '精选']" @tabClick="tabClick" ref="tabControl" ></tab-control>

     <Goods :goods="showGoods" ></Goods>

   </scroll>
    <back-top @click.native="backTopClick" v-show="backTopShow"></back-top>
    </div>


</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabControl/TabControl";
  import Goods from "components/content/goods/Goods";

  import HomeSwiper from "./childernComps/HomeSwiper";
  import RecommendView from "./childernComps/RecommendView";
  import FeatureView from "./childernComps/FeatureView";

  import {getHomeMultidata , getHomeGoodsData} from "network/home.js"
  import {debounce} from "common/utils";
  import {itemListenerMixin,backTopMixin} from 'common/mixin'


  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0, list:[]},
          'new': {page:0, list:[]},
          'sell': {page:0, list:[]},
        },
        currentType: 'pop',
        backTopShow: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    components: {
      NavBar,
      Scroll,
      TabControl,
      Goods,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    mixins: [itemListenerMixin,backTopMixin],
    created() {
      //请求多个数据
     this.getHomeMultidata();

     //请求商品数据
     this.getHomeGoodsData('pop');
      this.getHomeGoodsData('new');
      this.getHomeGoodsData('sell');

    },
    mounted() {

      console.log('mounted')
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)


    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()

      this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    methods: {


      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoodsData(type) {
        console.log(this.currentType);
        const page = this.goods[type].page+1
        getHomeGoodsData(type,page).then(res => {
           console.log(res)
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      },
      tabClick(index) {

        switch(index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        //使两个tabControl的currentIndex保持一致
        this.$refs.tabControl.currentIndex = index ;
        this.$refs.tabControl1.currentIndex = index ;
      },

      contentScroll(position) {
        //判断BackTop是否显示
        this.isBackTopShow(position);
        //决定tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop;
      },
      LoadMore() {
        // console.log(this.currentType)
        this.getHomeGoodsData(this.currentType);

        this.$refs.scroll.finishPullUp();
      },
      swiperImageLoad() {
      this.tabOffsetTop =   this.$refs.tabControl.$el.offsetTop;
      }

    }
  }
</script>

<style scoped>

  #home{
    position: relative;
    height: 100vh;
    /* padding-top: 44px; */
  }

  .home-nav{
    background-color: var(--color-text);
    color: #fff;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*}*/
  .tab-control{
    position: relative;
    z-index: 999;
    background-color: #fff;
  }

</style>
