const express = require('express');
const app = express();
require('dotenv').config()
const connectDB = require('./db/connect')

app.use(express.static(__dirname))
app.use(express.json());
app.use(express.urlencoded({extended: false}))


startApp = async ()=>{
    try {

        await connectDB(process.env.DB_URL)

        //SOCKET IO SETUP

        require('./socket')(app);
        require('./routes/index')(app, global.io)

        io.on('connection',(socket) => {
            console.log('a new user connected') // NOT FOR PRODUCTION
        })
        //END OF SOCKET IO SETUP
    }catch (e) {
        console.log(e)
    }
}

startApp()


