require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const app = express()
const c = require('./controller')

app.use(express());

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(database=>{
    app.set('db', database)
    console.log('database is live!!!', database)
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
}))

app.get('/api/users', c.readUser);

// app.post('api/post', c.createPost);



const port = 4000;
app.listen(port, ()=>console.log(`server listening on port ${port}`));