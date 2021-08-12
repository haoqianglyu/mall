// 引入发送请求的方法 一定要把路径补全
import { request } from "../../request/index.js";

//Page Object
Page({
  data: {
    //轮播图数组
    swiperList:[]
  },
  //页面开始加载 就会触发
  onLoad: function(options) {
    // 1.发送异步请求获取轮播图数据 优化:通过es6的promise来解决这个问题
    // var reqTask = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   method: 'GET',
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // });
      request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
      .then(result=>{
          this.setData({
          swiperList:result.data.message
        })
      })
  }
});
  