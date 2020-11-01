import React, { Component } from 'react';
import { connect } from 'react-redux'
import MemeList from '../memes/MemeList'
import './Dashboard.css'
import Chats from '../ChatBox/Chats';


class Dashboard extends Component {
    render() {


        const { memes } = this.props.memes;
        console.log(memes)
        return (
            <div>
                <div className="align-wrapper bring-down">
                    <div className="dashboard container">
                        <div className="row">
                            <div className="col s12 offset-13">
                                <MemeList memes={memes} />
                            </div>
                        </div>
                    </div>
                    <div className="dashboard container">

                    </div>
                </div>
                <Chats />
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        memes: state.meme
    }
}

export default connect(mapStateToProps)(Dashboard);