import bcrypt from 'bcryptjs'
import jsonwebtoken from "jsonwebtoken";

const salt = bcrypt.genSaltSync(10)

export async function userLogin(collection, username, password) {
    const user = await collection.findOne({ username })
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

export async function userSignUp(collection, username, password) {
    const user = await collection.findOne({ username })
    if (user) {
        throw new Error('User already exists')
    }

    const hash = await bcrypt.hash(password, salt)
    await collection.insertOne({ username, password: hash })

    return { username }
}
