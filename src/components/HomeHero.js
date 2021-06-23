import React from 'react'
import './HomeHero.scss'

function HomeHero() {
    return (
        <div className="hero-row">
        <div className="hero-row-left">
          <h1>Practice For Your <br/><span className="hero-keyword">HireVue</span> </h1>
        </div>
        <img className="hero-image" src={process.env.PUBLIC_URL+"/assets/images/hero_image.svg"}/>
      </div>
    )
}

export default HomeHero
