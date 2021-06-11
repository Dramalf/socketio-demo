import { io }from"socket.io-client"

const btn = document.getElementById("send")
const msgbox=document.getElementById("msg-box")
const ipt = document.getElementById("input")
const roomid=document.getElementById("room")

const socket = io("http://localhost:3000")



btn.onclick = () => {
    console.log(ipt.value)
    let msg = ipt.value
    let room = roomid.value
    msgbox.innerHTML+=`<p>me:${msg}</p>`
    socket.emit("send", msg, room)
    ipt.value=''
}

socket.on("connection", () => {
    console.log(`connected witd id ${socket.id}`)
})
socket.on("msgrcv", msg => {
    console.log("rcv",msg)
    msgbox.innerHTML+=`<p>other:${msg}</p>`
})


