import React from 'react'
import './HowWorksCard.scss'

function HowWorksCard(props) {
    return (
        <div >
            <img  src={process.env.PUBLIC_URL+"/assets/images/how_it_works/"+props.svg_filepath}/>
            <p >{props.text}</p>
        </div>
    )
}

export default HowWorksCard
