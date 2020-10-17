import React, { Component } from 'react';
import { connect } from 'react-redux'
import MemeList from '../memes/MemeList'



class Dashboard extends Component {
    render() {


        const { memes } = this.props.memes;
        console.log(memes)
        return (
            <div className="align-wrapper">
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s6 m6 offset-13">
                            <MemeList memes={memes} />
                        </div>
                    </div>
                </div>
                <div className="dashboard container">

                </div>
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