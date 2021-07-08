import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPageHero.scss'

function HomeHero() {
    return (
        <section className="hero-row">
        <img className="hero-image" src={process.env.PUBLIC_URL+"/assets/images/hero_image.svg"}/>
        <div className="hero-row-left">
          <h1>Practice For Your <span className="hero-keyword">HireVue</span> </h1>
          <Link to={process.env.PUBLIC_URL + "/question"}>
              <button className="tryit"> Try it  </button>
          </Link>
        </div>
      </section>
    )
}

export default HomeHero
