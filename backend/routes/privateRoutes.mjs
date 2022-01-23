import { getApplication, saveApplication } from "../db/application.mjs"

export default async function(fastify) {
    fastify.get("/api/application", {
        preHandler: fastify.auth([fastify.verifyToken]),
    }, async function(request, reply) {
        try {
            const application = await getApplication(request.user)
            reply.send({ application })
        } catch (err) {
            reply.code(500).send({ error: "Internal server error" })
        }
    })

    fastify.post("/api/application", {
        preHandler: fastify.auth([fastify.verifyToken]),
    }, async function(request, reply) {
        try {
            const application = await saveApplication(request.user, request.body.application)
            reply.send(application)
        } catch (err) {
            reply.code(500).send({ error: "Internal server error" })
        }
    })
}   
