const fs = require('fs');
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

/** For debugging or dev issues, can pass a param to run on another port. */
// let portArgIndex = JSON.parse(process.env.npm_config_argv).cooked.findIndex(e => e == "--port")
// const PORT = portArgIndex == -1 ? 3000 : JSON.parse(process.env.npm_config_argv).cooked[portArgIndex + 1]
const PORT = process.env.PORT || 3000

// app.use(express.static('public'))
// app.get('/', (req, res) => res.sendFile(`${__dirname}/public/index.html`))

const logStream = fs.createWriteStream("logs.txt", {flags: 'a'})

io.on('connection', socket => {
    console.log("New client connected!")
    socket.on('disconnect', () => {
        console.log("A client disconnected!")
    })

    socket.on('new', ({user}) => {
        console.log("New user:", user)
        io.emit("new", user)
    })

    socket.on("chat message", message => {
        console.log("Incoming Message: ", message)
        logStream.write(`[${new Date().toISOString()}]${message.user}: ${message.message}\n`);
        io.emit("chat message", message)
    })
})


http.listen(PORT, () => { console.log(`Listening on :${PORT}`) })