import { getApplication, saveApplication } from "../db/application.mjs"

export default async function(fastify) {
    fastify.get("/api/application", {
        preHandler: fastify.auth([fastify.verifyToken]),
    }, async function(request, reply) {
        const collection = this.mongo.db.collection("applications")

        try {
            const application = await getApplication(collection, request.user)
            reply.send({ application })
        } catch (err) {
            reply.code(500).send({ error: "Internal server error" })
        }
    })

    fastify.post("/api/application", {
        preHandler: fastify.auth([fastify.verifyToken]),
    }, async function(request, reply) {
        const collection = this.mongo.db.collection("applications")

        try {
            const application = await saveApplication(collection, request.user, request.body.application)
            reply.code(201).send({ application })
        } catch (err) {
            reply.code(500).send({ error: err.message })
        }
    })
}   
