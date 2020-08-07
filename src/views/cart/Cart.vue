<template>
  <div class="cart">
  <nav-bar class="cateNavBar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
    <cart-menu :categories = 'categories' @itemClick = 'cartClick'></cart-menu>
    <Scroll class="right-scroll" >
        <tab-content-cart :subcategories = 'showSubcategory'></tab-content-cart>
       <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick"></tab-control>
      <tab-content-detail :detail-goods="showCategoryDetail"></tab-content-detail>
    </Scroll>
    </div>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";

  import CartMenu from "./childrenComps/CartMenu";
  import TabContentCart from "./childrenComps/TabContentCart";
  import TabContentDetail from "./childrenComps/TabContentDetail";

  import {getCategory,getSubcategory,getCategoryDetail} from "network/cart";
  import {tabControlMixin} from "common/mixin"
  export default {
    name: "Cart" ,
    data() {
      return {
        categories: [],
        categoryData: {},
        currentIndex: -1
      }
    },
    mixins: [tabControlMixin],
    components: {
      Scroll,
      NavBar,
      TabControl,
      CartMenu,
      TabContentCart,
      TabContentDetail
    },
    created() {
      // 1.请求分类数据
      this._getCategory()
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        // console.log(this.categoryData[this.currentIndex].subcategories);
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        console.log(this.currentType);
        console.log(this.categoryData[this.currentIndex].categoryDetail);
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]

      }
    },
    methods: {
      _getCategory() {
        getCategory().then(res => {
          // 1.获取分类数据
          this.categories = res.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          // console.log(res);
          this.categoryData[index].subcategories = res.data,
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail('pop')
          this._getCategoryDetail('sell')
          this._getCategoryDetail('new')
        })
        // console.log(this.categoryData)
        // console.log(this.categoryData[0].subcategories);
      },
      _getCategoryDetail(type) {
        // 1.获取请求的miniWallkey
        const miniWallkey = this.categories[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
          console.log(this.categoryData);
        })
      },
      cartClick(index) {
        this._getSubcategories(index)
      }
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
.cateNavBar {
background-color: var(--color-text);
  color: white;
}
.content {
  height: calc(100vh - 44px - 49px);
  display: flex;
  }
  .right-scroll {
    flex:1 ;
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }
</style>
