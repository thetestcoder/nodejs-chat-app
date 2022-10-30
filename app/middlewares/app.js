module.exports = (app, express) =>{
    app.use(express.static(__dirname))
    app.use(express.json());
    app.use(express.urlencoded({extended: false}))

}