<template>
  <div id="myChart" :style="{width: '100%', height: '300px'}"></div>


</template>

<script>
import { getDayChartdata } from '@/api/chart'
var xdata = []
var politicy = []
var military = []
var economicy = []
var sportsy = []
var othersy = []
var socityy = []
var entertainy = []
var sumy = []
var yseries = []
var ydict = {}
var legenddata = []
var sampledy = []
export default {
  name: 'daychart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){

      getDayChartdata().then(response => {
        console.log("test111")
        this.list = response.data.items
        this.listLoading = false
        this.aryinit()
        for(var it in response.data.items)
        {
            xdata.push(response.data.items[it]['date'])
           politicy.push(response.data.items[it]['politic'])
           military.push(response.data.items[it]['military'])
           economicy.push(response.data.items[it]['economic'])
           sportsy.push(response.data.items[it]['sports'])
           socityy.push(response.data.items[it]['socity'])
           entertainy.push(response.data.items[it]['entertain'])
           othersy.push(response.data.items[it]['others'])
           sumy.push(response.data.items[it]['sum'])
           sampledy.push(response.data.items[it]['sampled']*5)
        }
        ydict['政治'] = politicy
        ydict['军事'] = military
        ydict['经济'] = economicy
        ydict['体育'] = sportsy
        ydict['社会'] = socityy
        ydict['娱乐'] = entertainy
        ydict['其他'] = othersy
        ydict['sum'] = sumy
        ydict['蓄水池采样'] = sampledy
        for(var key in ydict){
            legenddata.push(key)
            yseries.push(
                {
                    name:key,
            type:'line',
            xAxisIndex: 0,
            smooth: true,
            data: ydict[key]
                ,itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'solid'  //'dotted'虚线 'solid'实线
                    }
                }
            }}
            )
        }
        console.log(legenddata)
        this.drawLine();
      })
    
  }
  ,
  mounted(){
       
  },
  methods: {
    aryinit()
    {

            
            xdata = []
            politicy = []
            military = []
            economicy = []
            sportsy = []
            othersy = []
            socityy = []
            entertainy = []
            sumy = []
            yseries = []
            ydict = {}
            legenddata = []
    }
    ,
    drawLine(){
      var colors = ['#5793f3', '#d14a61', '#675bba','ff7300','ccff00']
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        

        myChart.setOption({
    color: colors,

    tooltip: {
        trigger: 'axis',
         axisPointer: {  //坐标轴指示器，坐标轴触发有效，
        type: 'line', //默认为line，line直线，cross十字准星，shadow阴影
		crossStyle: {
            color: '#fff'
		}
	}

    },
    legend: {
        data:legenddata,
        selected:{
        //'2015 降水量':false
        // politic[date] = data1[date]['政治']
//     military[date] = data1[date]['军事']
//     economic[date] = data1[date]['经济']
//     sports[date] = data1[date]['体育']
//     others[date] = data1[date]['其他']
//     socity[date] = data1[date]['社会']
//     entertain[date] = data1[date]['娱乐']
//     sum[date] = data1[date]['sum']
        '政治':false,
        '军事':false,
        '经济':false,
        '体育':false,
        '其他':false,
        '社会':false,
        '娱乐':false,

    }
    ,
    },
    
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [ 
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                }
            },
            
            data: xdata
        },
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: yseries
});
    },
  }
}
</script>
