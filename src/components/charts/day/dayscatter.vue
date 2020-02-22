<template>
  <div id="dayscatter" class="dayscatter" :style="{width: '100%', height: '400px'}" />
</template>
<script>
var base = +new Date(2019, 0, 0);
var oneDay = 24 * 3600 * 1000;
var date = [];
var actualvalue = [4062, 5387, 5508, 5191, 5715, 2539, 5226, 5454, 5605, 5178, 4819, 5663, 5694, 5377, 5349, 5759, 6404, 4041, 5334, 5721, 5278, 5492, 4787, 5394, 5386, 5262, 6391, 6487, 6849, 5974, 6181, 5695, 5722, 5834, 5750, 5620, 4663, 5095, 5083, 2772, 4566, 5626, 5313, 5189, 5528, 5231, 5366, 4827, 5280, 5201, 5013, 5301];
var sampledvalue = [6409, 5164, 5431, 6022, 6351, 5421, 6420, 5604, 5967, 5030, 5834, 6301, 5184, 5391, 4736, 6422, 6404, 5489, 5334, 5326, 5556, 5492, 4787, 5394, 6469, 5262, 5044, 6487, 5940, 6041, 5038, 6394, 5468, 5834, 5750, 6560, 4899, 6433, 6448, 4845, 6411, 5551, 5292, 5190, 6159, 5817, 5320, 4933, 5829, 4606, 5091, 4817];
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
        data: ['201901', '201902', '201903', '201904', '201905', '201906', '201907', '201908', '201909', '201910', '201911', '201912', '201913', '201914', '201915', '201916', '201917', '201918', '201919', '201920', '201921', '201922', '201923', '201924', '201925', '201926', '201927', '201928', '201929', '201930', '201931', '201932', '201933', '201934', '201935', '201936', '201937', '201938', '201939', '201940', '201941', '201942', '201943', '201944', '201945', '201946', '201947', '201948', '201949', '201950', '201951', '201952']
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
        data:['随机采样置信区间预估','实际数据']
    }
    ,
    series: [
        {
            name: '随机采样置信区间预估',
            type: 'line',
            symbolSize: '7',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            data: sampledvalue
        },
        {
            name: '实际数据',
            type: 'line',
            symbolSize: '7',
            itemStyle: {
                color: 'rgb(84, 255, 159)'
            },
            data: actualvalue
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
