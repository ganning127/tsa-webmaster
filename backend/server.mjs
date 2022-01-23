import "dotenv/config"
import fastifyAuth from "fastify-auth"
import publicRoutes from "./routes/publilcRoutes.mjs"
import privateRoutes from "./routes/privateRoutes.mjs"

import Fastify from "fastify"
import { verifyToken } from "./middleware/auth.mjs"
const fastify = Fastify({
    logger: true
})

fastify.decorate("verifyToken", verifyToken)
fastify.register(fastifyAuth)
    .after(() => privateRoutes(fastify))
fastify.register(publicRoutes)

async function start() {
    try {
        const address = await fastify.listen(3000)
        console.log(`server listening on ${address}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
