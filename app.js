const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./views/router'));



app.listen(2000, ()=>{
    console.log('SERVER corriendo en http://localhost:2000');

});
