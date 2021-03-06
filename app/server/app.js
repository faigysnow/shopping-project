var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser'),
    port = 3000,
    favicon = require('serve-favicon'),
    login = require('./api/loginApi'),
    session = require('express-session');



app.use(express.static('./app/client'));
app.use('/node_modules', express.static('./app/node_modules'));
app.use(favicon(path.join(__dirname, '../client/images/favicon.ico')));
// app.use(express.static(path.join(__dirname, './app/node_modules')));
app.use('/client', express.static(path.join(__dirname, './app/client')));
// app.use('/client', express.static('./client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// db configuration
var db = 'mongodb://127.0.0.1/north';
mongoose.connect(db);
var con = mongoose.connection;

con.on('error', console.error.bind(console, 'connection error:'));
con.once('open', function() {
    console.log("connection created");
});

let sess;
app.use(session({
    secret: 'somesecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))



app.listen(port, function() {
    console.log(`App listening on port ${port}`);
})

//main router index
app.use(login);