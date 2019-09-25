const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')

const app = new Koa()

app.use(bodyParser())

router.post('/login-token',async ctx => {
	const {body} = ctx.request
	const userinfo = body.username
	ctx.body = {
		message:'login success',
		user:userinfo,
	}
})

router.get('/getUser-token',async ctx => {
	ctx.body = {
		message:'get data success',
		userinfo:ctx.state.user
	}
})


app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)

