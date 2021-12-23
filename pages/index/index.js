// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		showTimePicker: false,
		expTime: '请选择期望时间',
		dayNum: 5,
		// timeArr: [{ time: '09:00-15:00', id: '123'}, { time: '15:00-21:00', id: '124'}],
		timeArr: ['09:00-15:00', '15:00-21:00']
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
	// 时间选择器
	toPickTime(){
		this.setData({showTimePicker: true})
	},
	closeTimePicker(){
		this.setData({showTimePicker: false})
	},
	updateExpTime(e){
		let expTime = e.detail.value
		this.setData({expTime})
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