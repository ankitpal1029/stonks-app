import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


class Chats extends Component {
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }

    handleClick = (e) => {
        e.preventDefault()


    }
    render() {


        return (
            <div>
                <ul id="slide-out" className="sidenav" >
                    <li><div className="user-view">
                        <div className="background">
                            <img src="" />
                        </div>
                        <a href="#user"><img className="circle" /></a>
                        <a href="#user"><span className="white-text name">Ankit</span></a>
                        <a href="#user"><span className="white-text email">ankitkumarpal27@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link with Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>
        )
    }
}

export default Chats;