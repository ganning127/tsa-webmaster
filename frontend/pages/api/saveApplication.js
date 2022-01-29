// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + req.headers.token
        },
        body: JSON.stringify({
            "application": req.body,
        })
    }

    const resp = await fetch(process.env.BACKEND_URL + '/application', options)
    const data = await resp.json();
    console.log(data);
    if (data?.statusCode === 500) {
        res.status(500).json(data)
    }
    else if (data?.statusCode === 401) {
        res.status(401).json(data)
    }
    else {
        res.status(200).json(data)
    }




}
