import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPageHero.scss'

function HomeHero() {
    return (
        <section>
        <img src={process.env.PUBLIC_URL+"/assets/images/hero_image.svg"}/>
        <div >
          <h1>Practice For Your <span>HireVue</span> </h1>
          <Link to={process.env.PUBLIC_URL + "/question"}>
              <button > Try it  </button>
          </Link>
        </div>
      </section>
    )
}

export default HomeHero
