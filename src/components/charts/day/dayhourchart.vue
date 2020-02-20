<template>
  <div id="hourchart" class="dayhourchart" :style="{width: '100%', height: '400px'}" />
</template>
<script>
var houroption = {
    title : {
        text: '各时段信息量',
        
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: [ '中国新闻网', '新浪新闻', '网易新闻', '其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '中国新闻网',
            type: 'bar',
            //barWidth: 5,
            //stack: '搜索引擎',
            data: [4988, 4881, 4637, 4895, 5049, 5001, 4415, 6597, 9023, 19777, 25488, 20670, 8226, 17293, 22367, 25282, 27279, 19193, 15662, 16443, 17476, 16799, 8704, 4504]
        },
        {
            name: '新浪新闻',
            type: 'bar',
            //stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
            name: '网易新闻',
            type: 'bar',
            //stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
            name: '其他',
            type: 'bar',
            //stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
        }
    ]
};
export default {
    name: 'dayhourchart',
    data (){
    return{

    }
},
    mounted(){
        this.chartinit(),
        console.log("hourchart fuck!!!")
    },
    methods:{
        chartinit(){
            
            let myChart = this.$echarts.init(document.getElementById('hourchart'))
            myChart.setOption(houroption)
    

            
        }
    }

}
</script>
