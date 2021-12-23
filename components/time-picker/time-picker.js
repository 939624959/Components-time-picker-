// components/timePicker/time-picker.js
const getDateStr = AddDayCount => {
	var dd = new Date();
	dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
	var y = dd.getFullYear();
	var m = dd.getMonth()+1;//获取当前月份的日期
	var d = dd.getDate();
	return y+"-"+m+"-"+d;
}

Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		title: String,
		isShow: Boolean,
		items: Array,
		dayNum: Number,
		timeArr: Array
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		mainActiveIndex: 0,
		activeId: null,
		itemTree:[]
	},
	lifetimes: {
		attached: function() {
		  // 在组件实例进入页面节点树时执行
		  this.getTimeLists()
		},
		detached: function() {
		  // 在组件实例被从页面节点树移除时执行
		},
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		// 关闭页面 触发父级设置为隐藏
		onClose(){
			this.triggerEvent('closeEvent',{})
		},
		// 选择大类
		onClickNav({ detail = {} }) {
			this.setData({
			  mainActiveIndex: detail.index || 0,
			});
		},
		// 选择小类
		onClickItem({ detail = {} }) {
			const activeId = this.data.activeId === detail.id ? null : detail.id;
		
			this.setData({ activeId });
		},
		// 确定按钮
		timePicked(){
			let { activeId } = this.data
			if(!!activeId){
				let dayIndex = Math.floor(activeId / 10)
				let timeIndex = activeId - dayIndex * 10
				console.log(dayIndex, timeIndex)
				let day = this.data.itemTree[dayIndex-1].text
				console.log(day)
				let time = this.data.itemTree[dayIndex].children[timeIndex].text
				console.log(time)
				let value = day + ' ' + time
				console.log(value)
				this.triggerEvent('onSelected', {value})
			}
			
			this.triggerEvent('closeEvent',{})
		},
		// 获取时间树数据
		getTimeLists(){
			let itemTree = []
			for(let i = 1; i <= this.properties.dayNum; i++){
				let day = getDateStr(i)
				let children = []
				for(let j = 0; j <= this.properties.timeArr.length; j++){
					children.push({
						text: this.properties.timeArr[j],
						id: i * 10 + j	
					})
				}
				
				itemTree.push({
					text: day,
					children
				})
			}
			this.setData({itemTree})
	
		},
	}
})
