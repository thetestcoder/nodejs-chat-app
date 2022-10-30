const Message = require('../app/models/Message')
const MessageController = require('../app/controllers/MessageController')

module.exports = (app, io) =>{
    app.get('/messages', MessageController.getAll)
    app.post('/messages', MessageController.store)
}