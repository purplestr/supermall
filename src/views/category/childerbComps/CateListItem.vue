<template>
<div class="cart-item">
  <div>
    <check-button :is-check="product.isCheck" @click.native="checkClick" class="check-button"></check-button>
  </div>
  <div class="img">
    <img :src="product.image" alt="">
  </div>
  <div class="info">
    <p>{{product.title}}</p>
    <p>{{product.desc}}</p>
    <div>
      <span>￥{{product.price}}</span>
      <span>×{{product.count}}</span>
    </div>
  </div>
</div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "CateListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.product.isCheck = !this.product.isCheck
      }
    },
    components: {
      CheckButton
    }
  }
</script>

<style scoped>
  .cart-item{
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #cccccc;
  }
  .img img{
    width: 80px;
    height: 110px;
    border-radius: 5px;
  }
  .info{
    margin-left: 15px;
  }
  .info p:nth-child(1){
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
    letter-spacing: 1px;
    margin-top: 5px;
    color: #000;
  }
  .info p:nth-child(2){
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 190px;
    margin: 20px 0 30px 0;
  }
  .info div span:nth-child(1){
    margin-right: 110px;
    color: #ffa500;
  }
  .check-button{
    margin-top: 45px;
    margin-right: 5px;
  }
</style>
