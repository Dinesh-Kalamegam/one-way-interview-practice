import React from 'react'
import './HomeHero.scss'

function HomeHero() {
    return (
        <section className="hero-row">
        <img className="hero-image" src={process.env.PUBLIC_URL+"/assets/images/hero_image.svg"}/>
        <div className="hero-row-left">
          <h1>Practice For Your <span className="hero-keyword">HireVue</span> </h1>
        </div>
      </section>
    )
}

export default HomeHero
