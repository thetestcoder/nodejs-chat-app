const http = require("http")
const socket = require("socket.io")

module.exports = (app)=>{
    const server = http.Server(app);
    server.listen(process.env.APP_PORT || 3000)
    global.io =  socket(server);
}