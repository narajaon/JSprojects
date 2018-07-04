let net = require('net')
let CL = console.log
let port = process.argv[2]

let formatedDate = function (date) {
    let year = date.getFullYear()
    let month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

    return `${year}-${month}-${day} ${hours}:${minutes}\n`
}

let server = net.createServer(function (socket) {
    let date = new Date()
    let currentDate = formatedDate(date)
    CL(currentDate)
    socket.write(currentDate)
    socket.end()
})

server.listen(port)