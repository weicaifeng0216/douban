// pages/exam01/exam01.js
//1:初始化数据库 
// env 添加环境id
const db = wx.cloud.database({
  env:'web-tao-test-01-5x4hi'
});
Page({
  data: {
  },
  insert:function(){
    db.collection("webwx04").add({//添加记录
      data:{          //当前记录内容
        name:"tom",
        age:12
      }
    }).then(res=>{   //成功回调结果
      console.log(res);
    }).catch(err=>{  //失败回调结果
      console.log(err);
    })//9:47
  },
  select:function(){
    db.collection("webwx04")//当前集合 
    .get()                  //获取
    .then(res=>{            //成功回调函数
      console.log(res);
    }).catch(err=>{         //失败回调函数
      console.log(err);
    })
  },
  upload:function(){
      //1:选择图片
      wx.chooseImage({
        count:1,  //一次选择一张图片
        //原图/压缩图
        sizeType:['original','compressed'],
        //图片来源 相册 相机
        sourceType:['album','camera'],
        success: function(res) {
           //选中图片
           var file = res.tempFilePaths[0];
           //上传图片
           wx.cloud.uploadFile({
              //新图片名称
              cloudPath:new Date().getTime()+".jpg",
              //选中图片 
              filePath:file,
              success:res=>{
                //云存储图片路径
                console.log(res.fileID);
              }
           })

        },
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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