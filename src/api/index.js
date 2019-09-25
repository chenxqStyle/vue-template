import request from '@/utils/service'

// 搜索
const search = param => {
  return request.get('/getUser-token', param)
}

export default

{
	search
}


// module.exports = 