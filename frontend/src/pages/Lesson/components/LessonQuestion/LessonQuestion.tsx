import React from 'react'

function LessonQuestion({ lessonQuestion, lessonProgress, lessonQuestionCard, lessonLanguages, questionHints, userAnswer, revealHint, submitAnswer }: any) {
   console.log(lessonQuestion.hints)
   return (
      <div className="lesson-card lesson-question-card active" ref={lessonQuestionCard}>
         <div className="lqc-question">
            <h3>Question {Number(lessonProgress.question) + 1}</h3>
            <h2>{lessonQuestion.question}</h2>
         </div>
         <div className="lqc-hints">
            <h3>Hints</h3>
               {// we map all of the hints, and give each one a ref, you need to use the "current" property to access the element
               // current is an array only if specified when creating the useRef ( const questionHints = useRef([]) as any )
               // we push each element into the array using the ref={(element) => questionHints.current[i] = element} syntax
               lessonQuestion.hints.map((hint: any, i: number) => (
                  <h2 className="lqcm-hint" key={i} onClick={revealHint} ref={(element) => questionHints.current[i] = element}>
                     {hint.type !== 'answer' && (
                        <span>{hint[`${lessonLanguages[0]}`]}</span>
                     )}
                     {hint.type !== 'answer' && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#485759" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                           <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                     )}
                     <span>{hint[`${lessonLanguages[1]}`]}</span>
                  </h2>
               ))}
         </div>
         <div className="lqc-answer">
            <h3>Answer</h3>
            <form className="lqc-answer-input" onSubmit={submitAnswer}>
               <input id="userAnswer" ref={userAnswer} type="text" autoFocus autoComplete="off" />
               <input type="submit" className="lqcai-submit" value="Submit" />
            </form>
         </div>
      </div>
   )
}

export default LessonQuestion