// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

    const request = JSON.parse(req.body);
    console.log(request.email);

    const options = {
        method: 'POST',
        body: {
            username: "john@doe.com",
            password: "password"
        }
    }

    console.log(process.env.BACKEND_URL + '/user')

    const resp = await fetch(process.env.BACKEND_URL + '/user', options)
    const data = await resp.json();
    console.log(data);
    res.status(200).json({ name: 'John Doe' })

}
