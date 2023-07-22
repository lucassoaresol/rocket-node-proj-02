import fastify from 'fastify'
import { env } from './env'

const port = env.PORT

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app.listen({ port }).then(() => {
  console.log('HTTP Server')
})
