export async function getApplication(collection, user) {
    const application = await collection.findOne(user)

    if (!application) {
        await collection.insertOne(user)
    }

    return await collection.findOne(user)
}

export async function saveApplication(collection, user, application) {
    const applicationObj = await collection.findOne(user)
    if (!applicationObj) {
        await collection.insertOne({ username: user.username })
    }

    await collection.replaceOne(user, { ...application, username: user.username })

    return await collection.findOne(user)
} 
