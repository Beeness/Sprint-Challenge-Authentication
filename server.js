const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./api/routes/routes');

const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
};

//TEST SERVER---SEND A MESSAGE WITH A GET
server.get('/', (req, res) => res.send('AUTH sprint API Running on PORT 5000...'));

//*Bee just in case code
// mongoose.connect('mongodb://localhost/auth-i').then( () => {
    // console.log('\n*** Connected to database ***\n');
// });

server.use(bodyParser.json());
server.use(cors());

routes(server);

module.exports = {
  server
};

//*Bee just in case code
// server.listen(5000, () => {console.log('\n*** API running on port 5000***\n')})
