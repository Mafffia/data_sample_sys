import request from '@/utils/request'
export function getChartdata(params){
    return request(
        {
            url: '/chart/data1',
            method: 'get',
            params  
        }
    )
}
export function getDayChartdata(params){
    return request(
        {
            url: '/chart/daychart',
            method: 'get',
            params  
        }
    )
}