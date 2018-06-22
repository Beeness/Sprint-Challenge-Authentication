const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');


const createUser = (req, res) => {
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const { username, password } = req.body;
  User.create( { username, password } )
    .then( users => {
      //token function is called
      const token = generateToken( users );

      res.status( 201 ).json( { user: user.username, token } );
    })
    .catch( err => {
      res.status( 500 ).json( err );
    });
    };
    //function creates Token
    function generateToken( user ) {
      const options = {
      expiresIn: '1h',
      };
      const payload = { name: user.username };
      // sign the token
      return jwt.sign( payload, mysecret, options );
};

module.exports = {
  createUser
};
