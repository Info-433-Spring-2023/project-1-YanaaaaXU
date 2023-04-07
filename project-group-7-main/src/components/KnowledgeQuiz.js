import React, { useState } from 'react';

export function KnowledgeQuiz() {
	const questions = [
		{
			questionText: 'As of 2022 what is the most endangered animal? ',
			answerOptions: [
				{ answerText: 'Javan Rhino', isRight: true },
				{ answerText: 'Vaquita', isRight: false },
				{ answerText: 'Mountain Gorilla', isRight: false },
				{ answerText: 'Tigers', isRight: false },
			],
		},
		{
			questionText: 'Whichh country has the most endangered species?',
			answerOptions: [
				{ answerText: 'Peru', isRight: false },
				{ answerText: 'Mexico', isRight: true },
				{ answerText: 'Indonesia', isRight: false },
				{ answerText: 'Madgascar', isRight: false },
			],
		},
		{
			questionText: 'How many endangered species are there?',
			answerOptions: [
				{ answerText: '38,500', isRight: false },
				{ answerText: '16,300', isRight: true },
				{ answerText: '2000', isRight: false },
				{ answerText: '50000', isRight: false },
			],
		},
		{
			questionText: 'Which animal is endangered in Michigan?',
			answerOptions: [
				{ answerText: 'Grey Wolf', isRight: true },
				{ answerText: 'Black Bear', isRight: false },
				{ answerText: 'Wolverine', isRight: false },
				{ answerText: 'Lion', isRight: false },
			],
		},
		{
			questionText: 'Many threatened or endangered species can be saved by a large ____',
			answerOptions: [
				{ answerText: 'Food Chain', isRight: false },
				{ answerText: 'Coal Mine', isRight: true },
				{ answerText: 'Repopulation Project', isRight: false },
				{ answerText: 'Reforestation Project', isRight: true },
			]
		},
		{
			questionText: 'After the endangered species act, how many on the list have been extinct to date?',
			answerOptions: [
				{ answerText: '30', isRight: false },
				{ answerText: '16', isRight: false },
				{ answerText: '9', isRight: true },
				{ answerText: '3', isRight: false },
			]
		},
		{
			questionText: 'Which animal is endangered in Michigan?',
			answerOptions: [
				{ answerText: 'Grey Wolf', isRight: true },
				{ answerText: 'Black Bear', isRight: false },
				{ answerText: 'Wolverine', isRight: false },
				{ answerText: 'Lion', isRight: false },
			]
		},
		{
			questionText: 'Which was the first animal to be added to the endangered species list due to climate change?',
			answerOptions: [
				{ answerText: 'Leopard Seal', isRight: false },
				{ answerText: 'Climate change is not real', isRight: false },
				{ answerText: 'Emperor Penguin', isRight: false },
				{ answerText: 'Polar Bear', isRight: true },
			]
		},
		{
			questionText: 'What is the average weight of a Male Panda?',
			answerOptions: [
				{ answerText: '250', isRight: true },
				{ answerText: '275', isRight: false },
				{ answerText: '225', isRight: false },
				{ answerText: '200', isRight: false },
			]
		},
		{
			questionText: 'Which one of these is a key threat to why Elephants are becoming extinct?',
			answerOptions: [
				{ answerText: 'Loss of food', isRight: false },
				{ answerText: 'Loss of Habitat', isRight: true },
				{ answerText: 'Poaching', isRight: false },
				{ answerText: 'Predators', isRight: false },
			]
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isRight) => {
		if (isRight) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (

		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isRight)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);

}
