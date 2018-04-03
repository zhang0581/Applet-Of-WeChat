Page({
    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 0, // tab切换
    },
    onLoad: function (options) {
        var that = this //把this对象复制到临时变量that
        var maxScore = JSON.parse(options.maxScore) // 把个人选择页面传来的参数保存到maxScore中

        // 请求服务器数据
        wx.request({
            url: "https://www.jnshu.com/a/occupation/list",
            success: function (res) {
                var occupationsList = []  // 保存要显示的列表数据，即maxScore中对应的id的数据
                for (var i = 0; i < maxScore.length; i++) {
                    occupationsList[i] = res.data.data.occupations[maxScore[i] - 1]  // 因为下标是从0开始的所以需要-1（参考对比服务器返回的数据）
                }
                that.setData({  // 把数据添加到当前页面以便调用
                    occupationsList: occupationsList,
                    salary: JSON.parse(occupationsList[0].salary)  // 数据为json格式需解析

                })
            }
        })
    },
    // 点击切换
    switchNav: function (e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;  // 重复点击当前选项时返回false
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    // 滑动切换
    swiperChange: function (e) {
        this.setData({
            currentTab: e.detail.current
        })
    }

})