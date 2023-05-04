import React from 'react';
import { Link } from 'react-router-dom';

export function Intro() {
    return (
        <section className="introduction">
            <div className="container">
                <div className="box">
                    <h2 className="animate-content second-anim intro">Introduction</h2>
                    <p className="animate-content third-anim">In brief, this website is about endangered animals.
                        Through this website we hope to spread awarness of
                        animals that are endangered. Pulling data from various sources we have prepared graphs
                        that will give people answers to what is going with these animals.
                    </p>
                    <div className="lg-screen">
                        <p className="animate-content third-anim fourth-anim">We strive to help
                            people understand the severity of the situation these animals face by being
                            endangered.
                            In addition we want to educate people on these animals, how they are
                            endangered, and how you can possibly help save them!
                        </p>
                    </div>
                    <Link to="about">
                        <button type="button">
                            About us
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
}
