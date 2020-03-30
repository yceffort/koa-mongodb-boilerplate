import Router from 'koa-router'

const appRouter = new Router()

appRouter.get('/', async (context) => {
  context.status = 200
})

export default appRouter
