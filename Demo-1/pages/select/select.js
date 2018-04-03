Page({
    data: {
        // 职业推荐分数计算表
        // 1:css 2:js 3:android 4:ios 5:java 6:op 7:pm 8:ui 9:QA 10:求职辅导 11:python 12:运营 id需与后台数据对上号
        score: [
            {
                option: [
                    { 1: 10, 2: 10, 3: -50, 4: -50, 5: -100, 6: -50, 7: 30, 8: 50, 9: 50, 10: 0, 11: 0, 12: 30, name: '初中以下' },
                    { 1: 20, 2: 20, 3: 0, 4: 0, 5: -50, 6: 10, 7: 30, 8: 50, 9: 50, 10: 0, 11: 0, 12: 30, name: '高中' },
                    { 1: 30, 2: 30, 3: 30, 4: 30, 5: 30, 6: 30, 7: 30, 8: 30, 9: 50, 10: 0, 11: 0, 12: 30, name: '大专' },
                    { 1: 30, 2: 30, 3: 40, 4: 40, 5: 40, 6: 40, 7: 40, 8: 40, 9: 30, 10: 0, 11: 0, 12: 40, name: '本科' },
                    { 1: 30, 2: 30, 3: 50, 4: 50, 5: 50, 6: 30, 7: 50, 8: 30, 9: -30, 10: 0, 11: 0, 12: 50, name: '硕士' },
                    { 1: 50, 2: 50, 3: 50, 4: 50, 5: 50, 6: 30, 7: 50, 8: 30, 9: -30, 10: 0, 11: 0, 12: 50, name: '博士' }
                ],
                name: '学　　历：'
            },
            {
                option: [
                    { 1: 50, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: 50, 8: 50, 9: 30, 10: 0, 11: 0, 12: 50, name: '男' },
                    { 1: 50, 2: 50, 3: 30, 4: 30, 5: 10, 6: -30, 7: 50, 8: 50, 9: 50, 10: 0, 11: 0, 12: 50, name: '女' }
                ],
                name: '性　　别：'
            },
            {
                option: [
                    { 1: 5, 2: 5, 3: 0, 4: 0, 5: -50, 6: 15, 7: 20, 8: 30, 9: 30, 10: 0, 11: 0, 12: 20, name: '18岁以下' },
                    { 1: 20, 2: 20, 3: 20, 4: 20, 5: 20, 6: 20, 7: 20, 8: 20, 9: 20, 10: 0, 11: 0, 12: 20, name: '18~24岁' },
                    { 1: 20, 2: 20, 3: 20, 4: 20, 5: 20, 6: 20, 7: 20, 8: 20, 9: 20, 10: 0, 11: 0, 12: 20, name: '25~30岁' },
                    { 1: 10, 2: 10, 3: 10, 4: 10, 5: 0, 6: 10, 7: 40, 8: 0, 9: 0, 10: 0, 11: 0, 12: 40, name: '30岁以上' }
                ],
                name: '年　　龄：'
            },
            {
                option: [
                    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 10, 8: 20, 9: 30, 10: 0, 11: 0, 12: 10, name: '零基础' },
                    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 50, 8: 50, 9: 0, 10: 0, 11: 0, 12: 50, name: '绘画基础' },
                    { 1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 50, 7: 0, 8: 0, 9: 30, 10: 0, 11: 0, 12: 0, name: '网络相关' },
                    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 50, 8: 50, 9: 50, 10: 0, 11: 0, 12: 50, name: '原型设计' }
                ],
                name: '基　　础：'
            },
            {
                option: [
                    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 30, 8: 50, 9: 50, 10: 0, 11: 0, 12: 30, name: '无专业' },
                    { 1: 40, 2: 40, 3: 40, 4: 40, 5: 50, 6: 40, 7: 40, 8: 40, 9: 30, 10: 0, 11: 0, 12: 40, name: '计算机相关' },
                    { 1: 30, 2: 30, 3: 35, 4: 35, 5: 40, 6: 30, 7: 30, 8: 30, 9: 30, 10: 0, 11: 0, 12: 30, name: '理工科' },
                    { 1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10, 7: 50, 8: 50, 9: 30, 10: 0, 11: 0, 12: 50, name: '文科' }
                ],
                name: '专　　业：'
            },
            {
                option: [
                    { 1: 10, 2: 10, 3: 10, 4: 10, 5: 10, 6: 10, 7: 50, 8: 50, 9: 50, 10: 0, 11: 0, 12: 50, name: '渣渣' },
                    { 1: 30, 2: 30, 3: 30, 4: 30, 5: 30, 6: 30, 7: 30, 8: 30, 9: 30, 10: 0, 11: 0, 12: 30, name: '普通' },
                    { 1: 40, 2: 40, 3: 40, 4: 40, 5: 50, 6: 40, 7: 30, 8: 0, 9: 0, 10: 0, 11: 0, 12: 30, name: '卓越' }
                ],
                name: '逻　　辑：'
            }
        ],
        // 初始化列表项下标
        init: [
            { Index: 0 },  // 学历
            { Index: 0 },  // 性别
            { Index: 0 },  // 年龄
            { Index: 0 },  // 基础
            { Index: 0 },  // 专业
            { Index: 0 }   // 逻辑
        ],
        // 事件名称
        change: [
            "educationChange",
            "genderChange",
            "ageChange",
            "basisChange",
            "majorChange",
            "logicChange"
        ],
    },

    educationChange: function (e) {
        this.setData({
            "init[0].Index": e.detail.value
        })
    },
    genderChange: function (e) {
        this.setData({
            "init[1].Index": e.detail.value
        })
    },
    ageChange: function (e) {
        this.setData({
            "init[2].Index": e.detail.value
        })
    },
    basisChange: function (e) {
        this.setData({
            "init[3].Index": e.detail.value
        })
    },
    majorChange: function (e) {
        this.setData({
            "init[4].Index": e.detail.value
        })
    },
    logicChange: function (e) {
        this.setData({
            "init[5].Index": e.detail.value
        })
    },

    scoreCalculate: function () {
        var score = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: -1000, 11: -1000, 12: 1 } // 初始化得分对象，10:求职辅导 11:python未开放所以给-1000
        var educationScore = this.data.score[0].option[this.data.init[0].Index]  // 学历分数对象
        var genderScore = this.data.score[1].option[this.data.init[1].Index]  // 性别分数对象
        var ageScore = this.data.score[2].option[this.data.init[2].Index]
        var basisScore = this.data.score[3].option[this.data.init[3].Index]
        var majorScore = this.data.score[4].option[this.data.init[4].Index]
        var logicScore = this.data.score[5].option[this.data.init[5].Index]

        for (var i = 1; i <= 12; i++) {  // 把选择后的各项分数相加
            score[i] += educationScore[i] + genderScore[i] + ageScore[i] + basisScore[i] + majorScore[i] + logicScore[i]
        }

        var aScore = Object.keys(score).sort(function (a, b) {  // 返回根据value大小降序排列的由key组成的数组
            return score[b] - score[a]  // 降序，score[a] - score[b]为升序
        })
        var maxScore = aScore.slice(0, 3);  // 取前三项

        wx.navigateTo({
            url: "../tab/tab?maxScore=" + JSON.stringify(maxScore)  // 保存数据到url中用于页面间传参
        })
    }
})