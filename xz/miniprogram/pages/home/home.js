// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       movielist:[]//保存电影列表
  },

  /**
   * 生命周期函数--监听页面加载 home.js
   */
  onLoad: function (options) {
    //1:调云函数 movielist2
    wx.cloud.callFunction({
      name:"movielist2",  //云函数名称
      data:{
        start:0,
        count:10
      }
    }).then(res=>{
      //console.log(typeof res.result);
      //console.log(res.result);
      //将字符串转js对象
      var obj = JSON.parse(res.result);
      //电影列表 55
      //console.log(obj.subjects);
      this.setData({
        movielist:obj.subjects
      });


    }).catch(err=>{
      console.log(err);
    });
    //JSON.parse(str) 17:30
    //将字符串->转换js obj->显示wxml标题
    //2:将云函数返回电影列表保存
    //3:显示当前组件
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})