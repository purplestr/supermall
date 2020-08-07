<template>
  <div class="swiper-box">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicators">
      <slot name="indicator">
        <div v-for="(item,index) in slideCount" class="indicator-item" :class="{active: index == currentIndex-1}"></div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      interval: {
        type: Number,
        default() {
          return 3000
        }
      },
      animDuration: {
        type: Number,
        default() {
          return 300
        }
      },
      moveRatio: {
        type: Number,
        default() {
          return 0.25
        }
      },
      showIndicator: {
        type: Boolean,
        default() {
          return true
        }
      }
    },
    data() {
      return {
        slideCount: 0, //元素个数
        totalWidth: 0,  //swiper的宽度
        swiperStyle: {}, //swiper的样式
        currentIndex: 1,  //当前元素index
        scrolling: false, //是否在滚动
      }
    },
    mounted() {
      setTimeout(() => {
        this.getSlideItem();
        //开启定时器
        this.startInterval()
      }, 300)
    },
    methods: {
      //获取swiper的基本信息以及在前后添加元素
      getSlideItem() {
        let swiperEl = document.querySelector('.swiper');
        let slideEls = swiperEl.getElementsByClassName('slide');

        //获取元素个数
        this.slideCount = slideEls.length;

        //获取swiper的宽度
        this.totalWidth = swiperEl.offsetWidth;

        //获取swiper的样式
        this.swiperStyle = swiperEl.style

        //元素个数大于一则在其前后插入元素
        if(this.slideCount >1) {
          let itemFirst = slideEls[0].cloneNode(true);
          let itemLast = slideEls[slideEls.length - 1].cloneNode(true);
          swiperEl.insertBefore(itemLast , slideEls[0]);
          swiperEl.appendChild(itemFirst);
        }

        // 4.让swiper元素, 显示第一个(目前是显示第一个元素)
        this.setTransform(-this.totalWidth);

      },
      startInterval() {
        this.playInterval = window.setInterval(() =>{
          this.currentIndex++;
          // console.log(this.currentIndex);
          this.setContentScroll(- this.currentIndex * this.totalWidth )

        },this.interval)

      },
      stopInterval() {
        window.clearInterval(this.playInterval)
      },
      setContentScroll(position) {
        this.scrolling = true;
        this.swiperStyle.transition = 'transform '+ this.animDuration + 'ms'
        this.setTransform(position)

        this.checkPosition()

        this.scrolling = false;
      }
      ,
      setTransform(position) {
        console.log(this.swiperStyle.transition);
        this.swiperStyle.transform = `translate3d(${position}px,0px,0px)`
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px,0px,0px)`
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px,0px,0px)`
      },
      checkPosition() {
        window.setTimeout(() => {
        this.swiperStyle.transition = '0ms'
        if(this.currentIndex <=0) {
          this.currentIndex = this.slideCount ;
          this.setTransform(- this.currentIndex * this.totalWidth)
        }
        else if(this.currentIndex >= this.slideCount+1 ) {
          this.currentIndex = 1 ;
          this.setTransform(- this.currentIndex * this.totalWidth)
        }
        // 2.结束移动后的回调
        this.$emit('transitionEnd', this.currentIndex-1);
      },this.animDuration)
      },
      touchStart(e) {
        window.setTimeout(()=> {

          if(this.scrolling == true){
            return ;
          }
          this.stopInterval();

          this.startX = e.touches[0].pageX;
        },this.animDuration)

      },
      touchMove(e) {
        // 1.计算出用户拖动的距离
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.startX;
        this.currentPosition =  -this.currentIndex * this.totalWidth;
        this.moveDistance = this.currentPosition + this.distance;

        this.setTransform(this.moveDistance)
      },
      touchEnd(e) {
        // 1.获取移动的距离
        let currentMove = Math.abs(this.distance);

        //2.判断移动距离
        if(this.distance === 0){
          return
        }
        if(this.distance >0 && currentMove > this.moveRatio * this.totalWidth) {
          this.currentIndex--;
        }
        if(this.distance <0 && currentMove > this.moveRatio * this.totalWidth) {
          this.currentIndex++;
        }
        //移动
        this.setContentScroll(- this.currentIndex * this.totalWidth )

        this.startInterval()

      }
    }
 }
</script>

<style scoped>
 .swiper-box {
   position: relative;
   overflow: hidden;
 }

  .swiper {
    display: flex;
  }

  .indicators {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
    height: 10px;
  }

  .indicator-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .active {
    background-color: #ff5f3e;
  }
</style>
