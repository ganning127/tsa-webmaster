import jsonwebtoken from "jsonwebtoken";

export function verifyToken(request, reply, done) {
    const token = request.headers.authorization.split(" ")[1].trim()
    if (!token) done(new Error("No token provided"))

    try {
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)

        request.user = {
            username: decoded.username,
        }

        done()
    } catch (err) {
         done(new Error("Invalid authorization token"))
    }
}
