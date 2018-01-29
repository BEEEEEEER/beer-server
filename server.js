'use strict';

//dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const bodyParser = require('body-parser').urlencoded({extended: true});
const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));
app.use(cors());


//endpoints
app.get('/testing', (req, res) => {
    res.send('WERK WERK WERK');
});



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));