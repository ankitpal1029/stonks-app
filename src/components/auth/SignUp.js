import React, { Component } from 'react';
import './SignUp.css'

class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            // <div className="container">
            //     <form className="white">
            //         <h5 className="grey-text text-darken-3">Sign In</h5>
            //         <div className="input-field">
            //             <label htmlFor="email" required>Email</label>
            //             <input type="email" id="email" />
            //         </div>
            //         <div className="input-field">
            //             <label htmlFor="password" required>Password</label>
            //             <input type="password" id="password" />
            //         </div>
            //         <div className="input-field">
            //             <button className="btm-pink lighten-1 z-depth-0">Login</button>
            //         </div>
            //     </form>
            // </div>
            <div className="container">
                <form>
                    <h2>Sign Up</h2>

                    <label for="first-name" required >First Name</label>
                    <input type="text" name="first-name" required />

                    <label for="last-name" required >Last Name</label>
                    <input type="text" name="last-name" required />


                    <label for="email" >Email</label>
                    <input type="text" name="email" required />
                    <div className="email error" ></div>
                    <label for="password" required >Password</label>
                    <input type="password" name="password" required />
                    <div className="password error"></div>
                </form>
            </div>


        )
    }
}

export default SignUp;