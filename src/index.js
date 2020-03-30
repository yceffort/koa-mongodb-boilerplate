import Koa from 'koa'
import KoaMorgan from 'koa-morgan'
import KoaBodyParser from 'koa-bodyparser'
import appRouter from './router/app-router'
import { initialize } from './mongodb-client'

const PORT = parseInt(process.env.PORT || '3000', 10)
async function main() {
  await initialize()

  const koa = new Koa()

  koa
    .use(KoaBodyParser())
    .use(KoaMorgan('combined'))
    .use(appRouter.routes())
    .use(appRouter.allowedMethods())

  koa.listen(PORT)
}

try {
  main()
} catch (err) {
  console.error(Err)
}
