const express = require('express');
const path = require('path');
const moment = require('moment');
const app = express();
const members = require('./members');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');


// // Init Middleware
// app.use(logger);
// Handle Bar Middleware;
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/' , (req,res)=> res.render('index',{
    title: 'Member App',
    members
}));

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/members', require('./routes/api/members'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));