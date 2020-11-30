import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Chats.css';


class Chats extends Component {
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});

        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225})
    }

    handleClick = (e) => {
        e.preventDefault()


    }

    render() {


        return (
            <div>
                <ul id="slide-out" className="sidenav" >
                <div className="join-container">
                    {/* <main className="join-main"> */}
                        <form className="chatoptions-box">
                                <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Choose Room!</a>
                                <ul id='dropdown1' class='dropdown-content'>
                                    <li><a href="#!">CompareMemes</a></li>
                                    <li><a href="#!">Chat</a></li>
                                </ul>
                            {/* </div> */}
                            <button type="submit" className="btn">Join Chat</button>
                        </form>
                    {/* </main> */}
		        </div>
                </ul>
            </div>
        )
    }
}

export default Chats;