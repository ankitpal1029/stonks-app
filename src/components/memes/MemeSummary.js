import React from 'react'
import './MemeSummary.css'
import { Link } from 'react-router-dom'

const handleClick = (e) => {
    e.preventDefault()
    e.target.classList.toggle("fa-thumbs-down");
}

const MemeSummary = ({ meme }) => {
    console.log(meme.meme_path)
    return (
        <div className="card z-depth-0 project-summary center-align" key={meme.id} >
            <div className="card-content grey-text text-darken-3" >
                <span className="card-title">{meme.title}</span>
                <Link to={'/meme/' + meme.id} key={meme.id}>
                    <img src={meme.meme_path} alt='not available' className="responsive-img" />
                </Link>
            </div>
            <i onClick={handleClick} className="fa fa-thumbs-up"></i>
        </div>
    )
}

export default MemeSummary;