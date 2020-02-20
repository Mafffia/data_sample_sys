import Mock from 'mockjs'
const data = Mock.mock({
    'items':[{'key': 'http://www.chinanews.com/gn/2019/12-05/9026287.shtml','test':{'shit':'aaa'}, 'brief': '中俄友好、和平与发展委员会第十二次全体会议在京举行', 'type': '国内', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '23:45'}
    ,{'key': 'http://www.chinanews.com/gn/2019/12-05/9026286.shtml','test':{'shit':'aaa'}, 'brief': '国家医保局局长：将更多救命救急的好药纳入目录', 'type': '国内', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '23:40'}
    ,{'key': 'http://www.chinanews.com/gn/2019/12-05/9026285.shtml', 'test':{'shit':'aaa'},'brief': '王勇出席中国质量(深圳)大会并调研时强调 提升质量治理能力 推动经济高质量发展', 'type': '国内', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '23:36'}
    ,{'key': 'http://www.chinanews.com/gn/2019/12-05/9026284.shtml', 'test':{'shit':'aaa'},'brief': '人民日报评论员：美国大搞反恐双重标准令人不齿', 'type': '国内', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '23:35'}
    ,{'key': 'http://www.chinanews.com/gn/2019/12-05/9026282.shtml', 'test':{'shit':'aaa'},'brief': '全国政协双周协商座谈会围绕“建立生态补偿机制中存在的问题和建议”协商议政', 'type': '国内', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '23:32'}
    ,{'key': 'http://www.chinanews.com/sh/2019/12-05/9026283.shtml', 'test':{'shit':'aaa'},'brief': '河北霸州被曝多处异常坑塘 环境局：已成立工作组', 'type': '社会', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '23:31'}
    ,{'key': 'http://www.chinanews.com/cul/2019/12-05/9026280.shtml', 'test':{'shit':'aaa'},'brief': '“周扒皮”形象作者高玉宝去世 《半夜鸡叫》有他童年影子', 'type': '文化', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '23:26'}
    ,{'key': 'http://www.chinanews.com/sh/2019/12-05/9026281.shtml', 'test':{'shit':'aaa'},'brief': '黄河支流生态调查：作坊排污砂厂滥采 河长成虚设', 'type': '社会', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '23:22'}
    ,{'key': 'http://www.chinanews.com/gj/2019/12-05/9026279.shtml','test':{'shit':'aaa'}, 'brief': '美国众议院议长佩洛西：将推进草拟弹劾特朗普条款', 'type': '国际', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '22:52'}
    ,{'key': 'http://www.chinanews.com/sh/2019/12-05/9026278.shtml', 'test':{'shit':'aaa'},'brief': '湖南浏阳烟花厂爆炸事件：3名干部被先期免职', 'type': '社会', 'fee': '0', 'belonging': 'chinanews', 'accessible': 'true', 'date': '2019-12-05', 'time': '22:48'}]
}
)
export default [
    {
      url: '/test/list',
      type: 'get',
      response: config => {
        const items = data.items
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