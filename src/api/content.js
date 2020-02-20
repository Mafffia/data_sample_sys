import request from '@/utils/request'

export function getContent(params) {
  return request({
    url: '/test/list',
    method: 'get',
    params
  })
}
