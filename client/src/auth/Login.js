import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: 'gusgus',
        password: '12345'
    };

    render() {
        return
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username</label>
                </div>
            </form>
    }


};

export default Login;