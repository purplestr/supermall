import axios from 'axios'

//方法3
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
<<<<<<< HEAD
    baseURL: 'http://152.136.185.210:8000/api/z8',
=======
    baseURL: '',
>>>>>>> d667b45f178aa917bfe868b0762147d07e228c90
    timeout:  50000
  })

  //2.请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config);
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求时，都希望界面中显示一个请求的图标
    //3.某些网络请求（比如登录（token）），必须携带一些特殊信息
    return config
  },error => {
    // console.log(err);
    }
    )

  //2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    // console.log(err)
  })


  //3.真正的网络请求
  return instance(config)

}
