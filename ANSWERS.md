<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    `Middleware` is basically software that we use between the sever-side and cleint-side and offers more features than what's offered by the operating system.
    `Express.js Sessions` uses a session which basically stores data across requests and each user has a unique session.  You're basically keeping track of your users.
    `bcrypt` allows us to hash passwords.
    `JWT`  allows us to authenticate users based on tokens.

    
2.  What does bcrypt do in order to prevent attacks?
    bcrypt provides a way of hashing passwords which takes a client's password and changes it so the original password is difficult to discover, especially if the password is long and has different characters.

3.  What are the three parts of the JSON Web Token?
    1. header: contains the algorithm and token type.
    2. payloa: contains data such as the name, initiated time and expiration time.
    3. signature: information from the header and the payload along with a secret creates the signature.