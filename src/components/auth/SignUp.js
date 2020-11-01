import React, { Component } from 'react';
import './SignUp.css'

class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        // const firstName = e.target.firstName.value;
        // const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        // console.log(firstName, lastName, email, password);

        try {
            const res = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        } catch (err) {
            console.log(err);
        }


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
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>

                    {/* <label htmlFor="firstName" required >First Name</label>
                    <input type="text" name="firstName" required />

                    <label htmlFor="lastName" required >Last Name</label>
                    <input type="text" name="lastName" required /> */}


                    <label htmlFor="email" >Email</label>
                    <input type="text" name="email" required />
                    <div className="email error" ></div>
                    <label htmlFor="password" required >Password</label>
                    <input type="password" name="password" required />
                    <div className="password error"></div>

                    <button>Submit</button>
                </form>
            </div>


        )
    }
}

export default SignUp;