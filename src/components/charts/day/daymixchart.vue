<template>
  <div :id="id" :class="className" :style="{width: '100%', height: '500px'}" />
</template>

<script>
import echarts from 'echarts'
import resize from './minix/resize'
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
var titleary = ['政治','军事','经济','体育','社会','娱乐','其他','总和']
var xseries = []
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  created(){

      getDayChartdata().then(response => {
        console.log("test1121")
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
        }
        ydict['政治'] = politicy
        ydict['军事'] = military
        ydict['经济'] = economicy
        ydict['体育'] = sportsy
        ydict['社会'] = socityy
        ydict['娱乐'] = entertainy
        ydict['其他'] = othersy
        ydict['总和'] = sumy
        for(var key in ydict){
            var r = Math.ceil(Math.random()*255)
            var g = Math.ceil(Math.random()*255); 
            var b = Math.ceil(Math.random()*255); 
            var rgb = 'rgba(' + r +',' + g +','+ b +','+ '1)'
            var labelbool = false
            console.log(rgb)
            var type1 = 'line'
            if(key == '总和'){
                type1 = 'line'
                labelbool = true
            }
            legenddata.push(key)
        //     {
        //   name: 'male',
        //   type: 'bar',
        //   stack: 'total',
        //   itemStyle: {
        //     normal: {
        //       color: 'rgba(0,191,183,1)',
        //       barBorderRadius: 0,
        //       label: {
        //         show: true,
        //         position: 'top',
        //         formatter(p) {
        //           return p.value > 0 ? p.value : ''
        //         }
        //       }
        //     }
        //   },
        //   data: [
        //   ...
        //   ]
        // },
            yseries.push(
                {
                    name:key,
            type:type1,
            stack: 'total',
            xAxisIndex: 0,
              itemStyle: {
            normal: {
              color: rgb,
              barBorderRadius: 0,
              label: {
                show: true,
                position: 'top',
              }
            }
          },
            smooth: labelbool,
            data: ydict[key]
                }
            )
        }

        this.initChart()
      })
    
  }
  ,
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
            xseries = []
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      const xData = xdata
      this.chart.setOption({
        backgroundColor: '#F4F8F4',
        title: {
          text: 'statistics',
          x: '20',
          top: '20',
          textStyle: {
            color: '#fff',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          borderWidth: 0,
          top: 150,
          bottom: 95,
          textStyle: {
            color: '#fff'
          }
        },
        legend: {
          x: '5%',
          top: '10%',
          textStyle: {
            color: '#90979c'
          },
          data: titleary,
          selected:{
          }
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0

          },
          data: xData
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#90979c'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          splitArea: {
            show: false
          }
        }],
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [
            0
          ],
          bottom: 30,
          start: 40,
          end: 60,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: '#d3dee5'

          },
          textStyle: {
            color: '#fff' },
          borderColor: '#90979c'

        }, {
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: yseries
      })
    }
  }
}
</script>
