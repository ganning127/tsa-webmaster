// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

    const request = JSON.parse(req.body);

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": request.email,
            "password": request.password
        })
    }

    const resp = await fetch(process.env.BACKEND_URL + '/user', options)
    const data = await resp.json();
    console.log(data);
    res.status(200).json(data)
}
