import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from "firebase/database";
export function PersonalImpact(props) {

    // Add use state for each question
    let selectQ1 = useState(0);
    let selectQ2 = useState(0);
    let selectQ3 = useState(0);
    let selectQ4 = useState(0);
    let selectQ5 = useState(0);
    let selectQ6 = useState(0);
    let selectQ7 = useState(0);
    let selectQ8 = useState(0);
    let quizDone = useState(false);

    const [scoresArray, setScoreArray] = useState([]);

    console.log(scoresArray)

    let currentScore = parseInt(selectQ1[0]) + parseInt(selectQ2[0]) + parseInt(selectQ3[0]) + parseInt(selectQ4[0]) + parseInt(selectQ5[0]) +
        parseInt(selectQ6[0]) + parseInt(selectQ7[0]) + parseInt(selectQ8[0]); // Add more selectValue states, 

    //Button submit, uploads current score to firebase.
    const handleClick = (event) => {
        if (!quizDone[0]) {
            const overallScore = { score: currentScore };
            event.preventDefault();
            const db = getDatabase();
            let scoreRef = ref(db, "LastImpactScores")
            firebasePush(scoreRef, overallScore)
            quizDone[1](true);
        } else {
            quizDone[1](false);
        }
    }

    // Functions that references the question values, update depending on change.
    const selectQ1s = (event) => {
        selectQ1[1](event.target.value)
    }
    const selectQ2s = (event) => {
        selectQ2[1](event.target.value)
    }
    const selectQ3s = (event) => {
        selectQ3[1](event.target.value)
    }
    const selectQ4s = (event) => {
        selectQ4[1](event.target.value)
    }
    const selectQ5s = (event) => {
        selectQ5[1](event.target.value)
    }
    const selectQ6s = (event) => {
        selectQ6[1](event.target.value)
    }
    const selectQ7s = (event) => {
        selectQ7[1](event.target.value)
    }
    const selectQ8s = (event) => {
        selectQ8[1](event.target.value)
    }




    // Gets all scores from firebase
    useEffect(() => {

        //hook up listener for when a value changes
        const db = getDatabase();
        let lastScoreRef = ref(db, "LastImpactScores")
        onValue(lastScoreRef, (snapshot) => {
            const newValObj = snapshot.val();
            console.log(newValObj)
            if (newValObj != null) {
                const keys = Object.keys(newValObj);
                const newObjArray = keys.map((keyString) => {
                    return newValObj[keyString]
                })
                setScoreArray(newObjArray)
            }
        })
    }, [])


    // Calculate average
    let scoreTotal = 0;
    let length = scoresArray.length;
    scoresArray.forEach(({ score }) => scoreTotal += parseInt(score));
    let average = scoreTotal / length;
    let result;

    // Print result depending on average vs. user's score
    function PrintResult(props) {
        console.log(average)
        console.log(currentScore)

        if (average < currentScore) {
            result = <p>You are well on track with making the planet a better place! in other words
                you are saving the animals!
            </p>
        } else if (currentScore < average) {
            result = <p>You need to work on your sustainability a bit!
            </p>

        } else {
            result = <p>Wow, you're really killing the animals and our planet.
                do some research!
            </p>
        }

        return (result);
    }

    //Display result screen vs. quiz screen.

    if (!quizDone[0]) {
        return (
            <>
                <div className="main">
                    <section className="introduction">
                        <div className="container">
                        </div>
                    </section>
                </div>
                <h2>Welcome to Personal Impact</h2>
                <div className="container">
                    <p>This personal impact quiz will gauge how you are impacting the planet.
                        Some questions utilize a 1-5 scale where one is seldom/never and 5 is regularly/every time.
                        There is no right or wrong answer!
                        This is just to see if you are contributing towards the sustainability of Earth
                        and it's wildlife or the downfall of the planet. It's okay if you aren't doing your part
                        as it is never to late to start caring about wildlife and our planet! When you are done you can
                        click the button at the bottom to get your sustainability score!
                    </p>
                </div>
                <div className='questionSection' >
                    <form>
                        <label className='question'>Do you take 5 hour showers?</label>
                        <div className='answers'>
                            <input type='radio' name="q1" value="2" onChange={selectQ1s}></input>Yes
                            <input type='radio' name="q1" value="1" onChange={selectQ1s}></input>Maybe
                            <input type='radio' name="q1" value="0" onChange={selectQ1s}></input>No
                        </div>

                        <label className='question'>How often do you throw out leftovers?</label>
                        <div className='answers'>
                            <input type='radio' name="q2" value="5" onChange={selectQ2s}></input>5 Often
                            <input type='radio' name="q2" value="4" onChange={selectQ2s}></input>4
                            <input type='radio' name="q2" value="3" onChange={selectQ2s}></input>3 Sometimes
                            <input type='radio' name="q2" value="2" onChange={selectQ2s}></input>2
                            <input type='radio' name="q2" value="1" onChange={selectQ2s}></input>1 Seldom/never
                        </div>

                        <label className='question'>Do you eat animal products?</label>
                        <div className='answers'>
                            <input type='radio' name="q3" value="0" onChange={selectQ3s}></input>Yes
                            <input type='radio' name="q3" value="1" onChange={selectQ3s}></input>Maybe
                            <input type='radio' name="q3" value="2" onChange={selectQ3s}></input>No
                        </div>

                        <label className='question'>Do you leave the water running when brushing your teeth?</label>
                        <div className='answers'>
                            <input type='radio' name="q4" value="2" onChange={selectQ4s}></input>Yes
                            <input type='radio' name="q4" value="1" onChange={selectQ4s}></input>Sometimes
                            <input type='radio' name="q4" value="0" onChange={selectQ4s}></input>No
                        </div>

                        <label className='question'>Do you use organic products?</label>
                        <div className='answers'>
                            <input type='radio' name="q5" value="2" onChange={selectQ5s}></input>Yes
                            <input type='radio' name="q5" value="1" onChange={selectQ5s}></input>Maybe
                            <input type='radio' name="q5" value="0" onChange={selectQ5s}></input>No
                        </div>

                        <label className='question'>How often do you leave your light on after leaving?</label>
                        <div className='answers'>
                            <input type='radio' name="q6" value="5" onChange={selectQ6s}></input>5 Often
                            <input type='radio' name="q6" value="4" onChange={selectQ6s}></input>4
                            <input type='radio' name="q6" value="3" onChange={selectQ6s}></input>3 Sometimes
                            <input type='radio' name="q6" value="2" onChange={selectQ6s}></input>2
                            <input type='radio' name="q6" value="1" onChange={selectQ6s}></input>1 Seldom/never
                        </div>

                        <label className='question'>Do you use an electric vehicle?</label>
                        <div className='answers'>
                            <input type='radio' name="q7" value="2" onChange={selectQ7s}></input>Yes
                            <input type='radio' name="q7" value="1" onChange={selectQ7s}></input>Sometimes
                            <input type='radio' name="q7" value="0" onChange={selectQ7s}></input>No
                        </div>

                        <label className='question'>How often do you recycle?</label>
                        <div className='answers'>
                            <input type='radio' name="q8" value="5" onChange={selectQ8s}></input>5 Often
                            <input type='radio' name="q8" value="4" onChange={selectQ8s}></input>4
                            <input type='radio' name="q8" value="3" onChange={selectQ8s}></input>3 Sometimes
                            <input type='radio' name="q8" value="2" onChange={selectQ8s}></input>2
                            <input type='radio' name="q8" value="1" onChange={selectQ8s}></input>1 Seldom/never
                        </div>


                        <button onClick={handleClick}>
                            <span className='bText'>
                                Click me to get your sustainability score!
                            </span>
                        </button>
                    </form>
                </div>

            </>

        );
    } else {
        return (
            <>
                <div className="main">
                    <section className="introduction">
                        <div className="container">
                        </div>
                    </section>
                </div>
                <div className='results'>
                    <h2>You finished! Here is your sustainability score!</h2>
                    <p>The average sustainability score was {average}, your score was {currentScore}.</p>
                    <PrintResult />
                    <div>
                        <h2>
                            Learning More!
                        </h2>
                        <p>If you want to learn more about being sustainability and expressing environmental dedication,
                            then you can check out the links below!</p>
                        <ul className='list'>
                            <li><a href='https://www.biologicaldiversity.org/programs/population_and_sustainability/sustainability/live_more_sustainably.html'>12 Ways to Live More Sustainably</a></li>
                            <li><a href='https://www.iberdrola.com/sustainability/how-to-reduce-plastic-use'>How to Reduce Plastic Consumption</a></li>
                            <li><a href="https://www.worldwildlife.org/">WWF-Endangered Species Conservation</a></li>
                            <li><a href='https://blueandgreentomorrow.com/environment/6-tips-for-reducing-environmental-impact-on-planet/'>6 Tips For Reducing Your Environmental Impact On The Planet</a></li>
                        </ul>
                    </div>


                    <form>
                        <button onClick={handleClick}>Play again!</button>
                    </form>
                </div>

            </>




        );
    }

}

