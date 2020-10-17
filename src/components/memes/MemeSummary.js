import React from 'react'


const MemeSummary = ({ meme }) => {
    console.log(meme.meme_path)
    return (
        <div className="card z-depth-0 project-summary center-align" key={meme.id} >
            <div className="card-content grey-text text-darken-3" >
                <span className="card-title">{meme.title}</span>
                <img src={meme.meme_path} alt='not available' className="responsive-img" />
            </div>
        </div>
    )
}

export default MemeSummary;