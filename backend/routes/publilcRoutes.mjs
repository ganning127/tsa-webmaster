import { userLogin } from "../db/auth.mjs"

export default async function(fastify, options) {
    fastify.post("/api/user/login", async (request, reply) => {
        const username = request.body.username
        const password = request.body.password
        
        try {
            const token = await userLogin(username, password)
            reply.send({ token })
        } catch (err) {
            reply.code(403).send({ error: "Error validating user" })
        }
    })
}
