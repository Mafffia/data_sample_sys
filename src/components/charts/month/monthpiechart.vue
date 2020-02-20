<template>
  <div id="mypieChart" :style="{width: '450px', height: '300px'}"></div>


</template>

<script>
import { getChartdata } from '@/api/chart'
var legenddata = ["politic","military","economic","sports","socity","entertain","others","sum"]
var seriesdata = []
var dict = {}
dict["politic"] = 0
dict["military"] = 0
dict["economic"] = 0
dict["sports"] = 0
dict["others"] = 0
dict["socity"] = 0
dict["entertain"] = 0
dict["sum"] = 0


export default {
name: 'monthpiechart',
data(){
    return{

    }
},

created(){
//     date: "2019-10-22"
// politic: 353
// military: 26
// economic: 190
// sports: 28
// others: 114
// socity: 206
// entertain: 15
// sum: 932
      getChartdata().then(response => {
          this.aryinit()
          this.list = response.data.items
          console.log(this.list)
          console.log("debug")
          
          for(var key in this.list)
          {
              dict["politic"]+= this.list[key]["politic"]
              dict["military"]+= this.list[key]["military"]
              dict["economic"]+= this.list[key]["economic"]
              dict["sports"]+= this.list[key]["sports"]
              dict["others"]+= this.list[key]["others"]
              dict["socity"]+= this.list[key]["socity"]
              dict["entertain"]+= this.list[key]["entertain"]
              dict["politic"]+= this.list[key]["politic"]
              
          }
          console.log(dict)
           for(var i =0;i<=7;i++){
              console.log(legenddata[i])
          }
          for(var i =0;i<=7;i++){
              seriesdata.push(
                  {
                      name:legenddata[i],
                      value:dict[legenddata[i]]
                  }
              )
          }
          console.log(seriesdata)
            let myChart = this.$echarts.init(document.getElementById('mypieChart'))
             myChart.setOption({
                 title : {
        text: '近一年成分比例',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: legenddata,

    },
    series : [
        {
            name: 'type',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: seriesdata,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
             })
      })
},
methods: {
    aryinit()
    {
seriesdata = []

this.dict = {}
dict["politic"] = 0
dict["military"] = 0
dict["economic"] = 0
dict["sports"] = 0
dict["others"] = 0
dict["socity"] = 0
dict["entertain"] = 0
dict["sum"] = 0
    }
}

}


</script>