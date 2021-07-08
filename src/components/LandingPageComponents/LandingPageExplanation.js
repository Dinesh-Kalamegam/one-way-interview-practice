import React from 'react'
import HowWorksCard from '../HowWorksCard'
import './LandingPageExplanation.scss'

function HomeHowWorks() {
    return (
        <section >
            <h2>How it works</h2>
            <div className="home-howworks">
                <HowWorksCard 
                    svg_filepath="selection.svg" 
                    text="(1) Choose a question from the lists below"
                />
                <HowWorksCard 
                    svg_filepath="preferences_popup.svg" 
                    text="(2) Allow the browser and website permission to use the camera and microphone"
                />
                <HowWorksCard 
                    svg_filepath="adjustments.svg" 
                    text="(3) Set how long you want the preparation countdown and recording time allowed"
                />
                <HowWorksCard 
                    svg_filepath="recording.svg" 
                    text="(4) Then you're good to go! Record and instantly playback your response as many times as you want"
                />
            </div>
        </section>
    )
}

export default HomeHowWorks
