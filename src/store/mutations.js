import {
  ADD_COUNTER,
  ADD_TO_CATE
} from "./mutation-types";


export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CATE](state, payload) {
    payload.isCheck = true;
    payload.count = 1;
    state.cateList.push(payload)
  }
}
