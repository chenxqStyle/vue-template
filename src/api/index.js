import request from '@/utils/service'

// 搜索
const search = param => {
  return request.get('/api/search', param)
}

module.exports = {
	search
}
