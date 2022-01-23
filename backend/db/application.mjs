const applications = []

export async function getApplication(user) {
    const application = applications.find(application => application.username === user.username)
    if (!application) {
        applications.push({
            username: user.username,
        })
    }

    return applications.find(application => application.username === user.username)
}

export async function saveApplication(user, application) {
    const index = applications.findIndex(application => application.username === user.username)
    if (index === -1) {
        applications.push({
            username: user.username,
        })
    }

    applications[index] = {
        ...application,
        username: user.username,
    }

    return applications[index]
} 
