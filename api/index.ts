import express from "express"
import cors from "cors"
const app = express()
app.use(cors());
import axios from "axios";

import { QuickDB } from "quick.db";
const db = new QuickDB();


const exchangeCode = async (code: string): Promise<string | null> => {
    const data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": "http://localhost:8080/callback"
    }
    console.log(code)

    const req = await axios.post("https://discord.com/api/v10/oauth2/token", data, {
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        auth: {
            username: "1286489088194510848",
            password: "TiZxdSxnjRFUT-4-fxKfqegcxKbvJG14"
        }
    }).catch(console.log)

    if (!req) return null

    db.set(req.data.access_token, { expiresIn: Date.now() + req.data.expires_in * 1000, refreshToken: req.data.refresh_token })
    return req.data.access_token
}

const refreshToken = async (refreshToken: string): Promise<string | null> => {
    const data = {
        "grant_type": "refresh_token",
        "refresh_token": refreshToken,
        "redirect_uri": "http://localhost:8080/callback"
    }

    const req = await axios.post("https://discord.com/api/v10/oauth2/token", data, {
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        auth: {
            username: "1286489088194510848",
            password: "TiZxdSxnjRFUT-4-fxKfqegcxKbvJG14"
        }
    }).catch(console.log)

    if (!req) return null

    db.set(req.data.access_token, { expiresIn: Date.now() + req.data.expires_in * 1000, refreshToken: req.data.refresh_token })
    return req.data.access_token
}

app.get("/auth", async (req, res) => {
    const code = req.query.code as string
    if (!code) return res.sendStatus(400)
    const authToken = await exchangeCode(code)
    if (!authToken) return res.sendStatus(400)

    res.send(authToken)
})

app.get("/servers", async (req, res) => {
    let token = req.headers.authorization as string
    if (!token) return res.sendStatus(400)
    const data = await db.get(token)
    if (!data) return res.sendStatus(400)
    if (data.expiresIn < Date.now()) {
        token = (await refreshToken(data.refreshToken))!
        if (!token) return res.sendStatus(400)
    }

    const requ = await axios.get("https://discord.com/api/v10/users/@me/guilds", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).catch(console.log)

    if (!requ) return res.sendStatus(400)
    res.send(requ.data)
})

app.get("/user", async (req, res) => {
    let token = req.headers.authorization as string
    if (!token) return res.sendStatus(400)
    const data = await db.get(token)
    if (!data) return res.sendStatus(400)
    if (data.expiresIn < Date.now()) {
        token = (await refreshToken(data.refreshToken))!
        if (!token) return res.sendStatus(400)
    }

    const requ = await axios.get("https://discord.com/api/v10/users/@me", {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).catch(console.log)

    if (!requ) return res.sendStatus(400)
    res.send(requ.data)
})

app.listen(3030)
console.log("Server started on port 3030")

