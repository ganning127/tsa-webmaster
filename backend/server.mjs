import "dotenv/config"
import fastifyAuth from "fastify-auth"
import publicRoutes from "./routes/publilcRoutes.mjs"
import privateRoutes from "./routes/privateRoutes.mjs"
import fastifyMongoDB from "fastify-mongodb"

import Fastify from "fastify"
import { verifyToken } from "./middleware/auth.mjs"
const fastify = Fastify({
    logger: true
})

fastify.register(fastifyMongoDB, {
    forceClose: true,
    url: process.env.MONGODB_URL,
})
    .register(fastifyAuth)
    .decorate("verifyToken", verifyToken)
    .register(privateRoutes)
    .register(publicRoutes)

async function start() {
    try {
        const address = await fastify.listen(process.env.PORT, '0.0.0.0')
        console.log(`server listening on ${address}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
