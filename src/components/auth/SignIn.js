import React, { Component } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
class SignIn extends Component {
    state = {
        email: '',
        password: '',
        data:''
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        // const firstName = e.target.firstName.value;
        // const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        // console.log(firstName, lastName, email, password);

        try {
            const res = await fetch('http://localhost:5000/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            const for_error = await res.json();
            if(for_error.errors_json){
                this.setState({
                    data:for_error,
                });
                console.log(for_error);
            }else{
                this.props.history.push("/");
                console.log(for_error);
            }
        }
                catch (err) {
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
                    <h2>Sign In</h2>

                    {/* <label htmlFor="firstName" required >First Name</label>
                    <input type="text" name="firstName" required />

                    <label htmlFor="lastName" required >Last Name</label>
                    <input type="text" name="lastName" required /> */}


                    <label htmlFor="email" >Email</label>
                    <input type="text" name="email" required />
                    <div className="email error" >

                    {
                        this.state.data && this.state.data.errors_json && 
                            <p>{this.state.data.errors_json.email}</p>
                    } 

                    </div>
                    <label htmlFor="password" required >Password</label>
                    <input type="password" name="password" required />
                    <div className="password error">
                        
                    {
                        this.state.data && this.state.data.errors_json && 
                            <p>{this.state.data.errors_json.password}</p>
                    } 
                    </div>
                    {/*<Link to="/">*/}
                        <button>Submit</button>
                    {/*</Link>*/}
                </form>
            </div>


        )
    }
}

export default SignIn;
