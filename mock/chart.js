import Mock from 'mockjs'
const data1 = {'2018-10': {'体育': 1050, '其他': 2661, '社会': 5669, '军事': 198, '娱乐': 512, '政治': 7304, '经济': 2997, 'sum': 20391}, '2018-11': {'体育': 1005, '其他': 2989, '社会': 5080, '军事': 156, '娱乐': 539, '政治': 7620, '经济': 3262, 'sum': 20651}, '2018-12': {'体育': 982, '其他': 2725, '社会': 6759, '军事': 195, '娱乐': 661, '政治': 8148, '经济': 3473, 'sum': 22943}, '2019-01': {'体育': 993, '其他': 2661, '社会': 7133, '军事': 166, '娱乐': 620, '政治': 8357, '经济': 3420, 'sum': 23350}, '2019-02': {'体育': 708, '其他': 2202, '社会': 6489, '军事': 169, '娱乐': 485, '政治': 6802, '经济': 2485, 'sum': 19340}, '2019-03': {'体育': 1043, '其他': 2886, '社会': 6047, '军事': 119, '娱乐': 509, '政治': 9245, '经济': 3203, 'sum': 23052}, '2019-04': {'体育': 1013, '其他': 2939, '社会': 7466, '军事': 240, '娱乐': 537, '政治': 8816, '经济': 3614, 'sum': 24625}, '2019-05': {'体育': 1122, '其他': 2599, '社会': 6868, '军事': 133, '娱乐': 436, '政治': 8820, '经济': 3324, 'sum': 23302}, '2019-06': {'体育': 960, '其他': 2451, '社会': 6302, '军事': 162, '娱乐': 390, '政治': 8369, '经济': 3023, 'sum': 21657}, '2019-07': {'体育': 1441, '其他': 3311, '社会': 8954, '军事': 307, '娱乐': 646, '政治': 9996, '经济': 4281, 'sum': 28936}, '2019-08': {'体育': 1189, '其他': 2963, '社会': 7143, '军事': 228, '娱乐': 474, '政治': 9881, '经济': 3600, 'sum': 25478}, '2019-09': {'体育': 1164, '其他': 2644, '社会': 4683, '军事': 172, '娱乐': 306, '政治': 9373, '经济': 3118, 'sum': 21460}, '2019-10': {'体育': 995, '其他': 2824, '社会': 4901, '军事': 412, '娱乐': 364, '政治': 8311, '经济': 3402, 'sum': 21209}}
var politic = {}
var military ={}
var economic = {}
var sports  = {}
var others = {}
var socity = {}
var entertain = {}
var sum = {}
var ret = []
for(var date in data1)
{
    politic[date] = data1[date]['政治']
    military[date] = data1[date]['军事']
    economic[date] = data1[date]['经济']
    sports[date] = data1[date]['体育']
    others[date] = data1[date]['其他']
    socity[date] = data1[date]['社会']
    entertain[date] = data1[date]['娱乐']
    sum[date] = data1[date]['sum']

}
for(var date in data1)
{
var toappend = {}
 toappend['date'] = date
 toappend['politic'] = politic[date]
 toappend['military'] = military[date]
 toappend['economic'] = economic[date]
 toappend['sports'] = sports[date]
 toappend['others'] = others[date]
 toappend['socity'] = socity[date]
 toappend['entertain'] = entertain[date]
 toappend['sum'] = sum[date]
ret.push(toappend)
 }
 console.log(ret)
 const reee = {'items':ret}
const mockdata = Mock.mock(reee)

export default [
    {
      url: '/chart/data1',
      type: 'get',
      response: config => {
        const items = mockdata.items
        return {
          code: 20000,
          data: {
            total: items.length,
            items: items
          }
        }
      }
    }
  ]