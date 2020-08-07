import {
  ADD_COUNTER,
  ADD_TO_CATE
} from "./mutation-types";


export default {
  addCate(context, payload) {
    return new Promise((resolve, reject) => {

      //1.查找之前的数组中是否有该商品
      let oldProduct = this.state.cateList.find(item => {
        return item.iid === payload.iid
      })
      //2.判断oldProduct
      if (oldProduct) {
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前商品数量+1')
      } else {
        context.commit(ADD_TO_CATE,payload)
        resolve('添加了新商品')
      }
    })
  }
}
