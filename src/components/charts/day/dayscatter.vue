<template>
  <div id="dayscatter" class="dayscatter" :style="{width: '100%', height: '400px'}" />
</template>
<script>
var base = +new Date(2019, 0, 0);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.round(Math.random() * 300)];
var data1 = [Math.round(Math.random() * 500)]
for (var i = 1; i < 366; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round(Math.random() * 300));
    data1.push(Math.round(Math.random() * 500));
}

var option1 = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        //left: 'left',
        text: '采样数据散点图',
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '50%']
    },
    dataZoom: [{
        type: 'inside',
        start: 85,
        end: 100
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    legend:{
        data:['水库法采样数据','随机法采样数据']
    }
    ,
    series: [
        {
            name: '水库法采样数据',
            type: 'scatter',
            symbolSize: '7',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            data: data
        },
        {
            name: '随机法采样数据',
            type: 'scatter',
            symbolSize: '7',
            itemStyle: {
                color: 'rgb(84, 255, 159)'
            },
            data: data1
        }
    ]
};

export default {
    name: 'dayscatter',
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
            
            let myChart = this.$echarts.init(document.getElementById('dayscatter'))
            myChart.setOption(option1)
    

            
        }
    }

}
</script>
