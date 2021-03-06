require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const app = express();

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);

    db.new_planes().then(planes=>{console.log(planes)})
        .catch(err=>console.error(err));
}).catch(err=>console.error(err));



app.use( bodyParser.json() );
app.use( cors() );

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

