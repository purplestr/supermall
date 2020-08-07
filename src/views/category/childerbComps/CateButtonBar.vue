<template>
  <div class="bottom-bar">
     <div class="bottom-left">
      <check-button class="all-check" :is-check = "isSelectAll" @click.native="checkClick"></check-button>
       <span class="all-check-text" >全选</span>
     </div>

    <div class ="bottom-center">
      <span>合计：{{totalPrice}}</span>
    </div>

    <div class="bottom-right" @click="totalClick">
      <span>去计算（{{checkLength}})</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  import {mapGetters} from "vuex"
  export default {
    name: "CateButtonBar",
    computed: {
      ...mapGetters(['cateLength','cateItem']),
      totalPrice() {
        return '￥' + this.cateItem.filter(item => {
          return item.isCheck
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      checkLength() {
        return this.cateItem.filter(item => item.isCheck).length
      },
      isSelectAll() {
        if(this.cateItem.length === 0) return false
        return !this.cateItem.find(item => !item.isCheck)
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkClick() {
        if(this.isSelectAll) {
          this.cateItem.forEach(item => item.isCheck = false)
        } else {
          this.cateItem.forEach(item => item.isCheck = true)
        }
      },
      totalClick() {
        if(this.checkLength == 0) {
          this.$toast.show('请选择要购买的商品')
        }
      }
    }
  }
</script>

<style scoped>
.bottom-bar {
  background-color: #f7f4f6;
  height: 40px;
  display: flex;
}
  .bottom-left {
    padding-top: 10px;
    width: 70px;
    margin-left: 10px;

  }
  .bottom-center {
    padding-top: 10px;
    flex: 1;
  }

  .bottom-right {
    padding-top: 10px;
    padding-left: 5px;
    width: 120px;
    background-color: red;
    color: var(--color-background);
  }

  .all-check {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 2px;


  }

  .all-check-text {
    position: relative;
    top: -5px
  }
</style>
