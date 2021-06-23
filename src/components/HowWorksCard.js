import React from 'react'
import './HowWorksCard.scss'

function HowWorksCard(props) {
    return (
        <div className="howworks-card">
            <img className="howworks-img" src={process.env.PUBLIC_URL+"/assets/images/how_it_works/"+props.svg_filepath}/>
            <p className="howworks-text">{props.text}</p>
        </div>
    )
}

export default HowWorksCard
