import { userLogin, userSignUp } from "../db/auth.mjs"

export default async function(fastify, options) {
    fastify.post("/api/user/login", async function (request, reply) {
        const username = request.body.username
        const password = request.body.password

        const collection = this.mongo.db.collection("users")
        
        try {
            const token = await userLogin(collection, username, password)
            reply.send({ token })
        } catch (err) {
            reply.code(403).send({ error: err.message })
        }
    })

    fastify.post("/api/user", async function (request, reply) {
        const username = request.body.username
        const password = request.body.password

        const collection = this.mongo.db.collection("users")

        try {
            await userSignUp(collection, username, password)
            const token = await userLogin(collection, username, password)
            reply.code(201).send({ token })
        } catch (err) {
            if (err.message === "User already exists")
                reply.code(409).send({ error: "User already exists" })
            else
                reply.code(500).send({ error: "Error creating user" })
        }
    })
}
