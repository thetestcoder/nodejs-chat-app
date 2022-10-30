const Message = require("../models/Message");

class MessageController{
    getAll(req, res){
        Message.find({}, (err, messages)=>{
            res.send(messages)
        })
    }

    store(req, res){
        const message = new Message(req.body)
        message.save(err =>{
            if (err){
                res.sendStatus(500)
            }
            global.io.emit('message', req.body);
            res.sendStatus(200)
        })
    }
}


module.exports = new MessageController