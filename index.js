const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static('public'))


app.get('/', (req, res) => res.sendFile(`${__dirname}/public/index.html`))

io.on('connection', socket => {
    console.log("A user has connected!")
    socket.on('disconnect', () => {
        console.log("User disconnected!")
    })

    socket.on('chat message', msg => {
        console.log("Incoming Message: " + msg )
        io.emit('chat message', msg)
    })
})


http.listen(3000, () => {console.log("Listening on :3000")})