import {
  ADD_COUNTER,
  ADD_TO_CATE
} from "./mutation-types";


export default {
  addCate(context, payload) {
    //1.查找之前的数组中是否有该商品
    let oldProduct = this.state.cateList.find(item => {
      return item.iid === payload.iid
    })
    //2.判断oldProduct
    if (oldProduct) {
      context.commit(ADD_COUNTER,oldProduct)
    } else {
      context.commit(ADD_TO_CATE,payload)
    }
  }
}
