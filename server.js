'use strict';

//dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const bodyParser = require('body-parser').urlencoded({extended: true});
const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;
const BreweryDb = require('brewerydb-node');

const brewdb = new BreweryDb('ac0a762267864965144e04a4b3c47f99');
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));
app.use(cors());


//endpoints
app.get('/testing', (req, res) => {
    res.send('WERK WERK WERK');
});

//getting foods to render from the database



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));