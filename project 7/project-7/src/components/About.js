/*Create the components of the About page */
import React, { useEffect } from 'react'; //import React library
import { AboutCards } from "./AboutCards.js"

export function About(props) {
    useEffect(() => {
        document.title = 'About';
    });
    return (
            <div className="main">
                <section className="introduction">
                    <div className="about-container">
                    </div>
                </section>

                <section className="paragraphs">
                    <div className="about-container">
                        <h2>Our Mission</h2>
                    </div>
                    <div className="paragraph">
                        <p>
                            Many people have heard about how ivory and other goods are seized from wildlife and traded
                            illegally. however,few understand what actually happens in this process. The illegal wildlife trade (IWT) is
                            ran by
                            dangerous networks who
                            show no mercy towards the animals they are poaching from. Not only are these groups harming
                            and
                            killing animals illegally,
                            but they are also putting many species into risk of extinction.
                        </p>
                        
                    </div>
                    
                    <div className="paragraph">
                        <p>
                            To make matters worse, information about these poaching groups is hard to come by, and not
                            as
                            accessible to the public as it should be.
                            People buy items that could have been made by some of these poaching networks and are
                            clueless
                            as to
                            what they are buying into. Furthermore,
                            there is little to no information in the form of technology surrounding this topic, which is
                            a
                            problem considering how much influence information
                            through technology has on our current population. In 2012, Google.org set up a project for
                            people to
                            "use technology to stop poaching".
                            World Wildlife Fund (WWF) used this as an opportunity to launch the Wildlife Crime
                            Technology
                            Project (WCTP), which uses technology to
                            address wildlife conservation issues. WWF uses technology like UAVs, artificial intelligence
                            applications, IoT sensors, and more to spot
                            poachers at night and to improve online information and data connectivity.
                        </p>
                    </div>
                </section>
                <AboutCards info={props.team}/>
            </div>
    )
}

