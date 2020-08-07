import {debounce} from "./utils";
import BackTop from "components/content/backTop/BackTop";


export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
mounted() {
  this.newRefresh = debounce(this.$refs.scroll.refresh,100)
  this.itemImgListener = () => {
    newRefresh()
  }

  this.$bus.$on('itemImgLoad',this.itemImgListener)
  console.log("我是混入的内容")
}
}


export const backTopMixin = {
  data() {
    return {
      backTopShow: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTopClick() {
      console.log('backTopClick');
      this.$refs.scroll.scrollTo(0,0,500);
    },
    isBackTopShow(position) {
      this.backTopShow = (-position.y) >1000 ;
    },
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: 'pop'
    }
  },
  methods: {
    tabClick(index) {
      // console.log(this.currentType);
      switch (index) {
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
    }
  }
}
