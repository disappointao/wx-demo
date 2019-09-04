// pages/detail/detail.js
let datas=require('../../datas/list-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:{},
    isCollected:false
  },
  handleCollection(){
    let isCollected = !this.data.isCollected;
    let obj = wx.getStorageSync('isCollected');
    obj[this.data.index] = isCollected;
    let title = isCollected ? '收藏成功' : '取消收藏';
    wx.showToast({
      title,
      icon: 'success'
    });
    wx.setStorage({
      key: 'isCollected',
      data: obj
    });
    this.setData({ isCollected });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      detailData:datas.list_data[options.id],
      index:options.id
    })
    let storageObj = wx.getStorageSync('isCollected');
    if (!storageObj) {
      storageObj = {};
      wx.setStorage({
        key: 'isCollected',
        data: storageObj
      });
    } else {
      let isCollected = storageObj[options.id] ? true : false;
      this.setData({ isCollected });
    }
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