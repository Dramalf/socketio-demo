const io = require("socket.io")(3000, {
    cors: {
        origin:["http://localhost:8080"]
    }
})
io.on("connection", socket => {
    console.log(socket.id)
    socket.on("send", (msg, room) => {
        socket.join(room)
    socket.to(room).emit("msgrcv",msg)
    })
})