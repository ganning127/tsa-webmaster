import bcrypt from 'bcryptjs'
import fastify from 'fastify';
import { request } from 'http';
import jsonwebtoken from "jsonwebtoken";

const salt = bcrypt.genSaltSync(10)

const users = [{
    username: "john@doe.com",
    password: bcrypt.hashSync("password", salt),
}]

export async function userLogin(username, password) {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error('User not found')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Invalid password')
    }
    
    const token = jsonwebtoken.sign({ username }, process.env.JWT_SECRET)
    return token
}

export async function userSignUp(username, password) {
    const user = users.find(user => user.username === username)
    if (user) {
        throw new Error('User already exists')
    }

    const hash = await bcrypt.hash(password, salt)
    users.push({
        username,
        password: hash
    })

    return { username }
}
