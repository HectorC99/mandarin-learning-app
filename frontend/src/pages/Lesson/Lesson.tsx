import { useRef, useState, useEffect, useMemo, FormEvent } from 'react'
import './Lesson.scss'
import { useLocation, useParams } from 'react-router-dom'
import { lessons } from '../../constants/lessons'
import { LessonIntro, LessonQuestion, SectionComplete, DictionarySideCard, CheatSheet } from '../index.js'
import donutImage from '../../assets/media/images/donutImage.svg'

function Lesson() {
   let lessonData: any
   let location = useLocation()
   let { lessonId } = useParams<{ lessonId: string }>()

   // if no state variable is passed, get the lessonId from the url and find the lesson data
   if (location.state) {
      lessonData = location.state
   } else {
      lessonData = lessons.find(lesson => lesson.id === lessonId)
   }

   const userAnswer = useRef<HTMLInputElement>(null)
   const questionHints = useRef(Array(3))
   const lessonQuestionCard = useRef<HTMLDivElement>(null)
   const [answer, setAnswer] = useState('')
   const [lessonProgress, setLessonProgress] = useState({ section: 0, question: 0 })
   const [lessonScore, setLessonScore] = useState({ current: 1, total: 0 })
   const [lessonSection] = useState(lessonData.sections[lessonProgress.section as keyof typeof lessonData.sections])
   const [dictionaryWords, setDictionaryWords] = useState([
      { word: 'Word', definition: 'Definition' },
      { word: 'Word', definition: 'Definition' },
      { word: 'Word', definition: 'Definition' },
      { word: 'Word', definition: 'Definition' },
   ])

   function shuffle(array: any[]) {
      let currentIndex = array.length, randomIndex
      // While there remain elements to shuffle
      while (currentIndex !== 0) {
         // Pick a remaining element
         randomIndex = Math.floor(Math.random() * currentIndex)
         currentIndex--
         // And swap it with the current element
         [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
      }
      return array
   }

   // Shuffle the questions so they are in a random order, the value should not change or be re-shuffled when the component re-renders
   const lessonQuestions = useMemo(() => {
      return shuffle(lessonSection.questions)
   }, [])
   const lessonQuestion = lessonQuestions[lessonProgress.question]

   // Shuffle the languages so they are in a random order, the value should change when the user moves to the next question
   const lessonLanguages = useMemo(() => {
      return shuffle(['english', 'pinyin'])
   }, [lessonProgress])
   lessonQuestion && (lessonQuestion.question = lessonQuestion.sentence[`${lessonLanguages[0]}`])
   lessonQuestion && (lessonQuestion.answer = lessonQuestion.sentence[`${lessonLanguages[1]}`])

   // when an answer is submitted, check if the answer is correct, if it is, move to the next question
   const submitAnswer = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (userAnswer.current && userAnswer.current.value.toLowerCase() === lessonQuestion.answer.toLowerCase()) {
         // remove the active class to hide the old question
         lessonQuestionCard.current && lessonQuestionCard.current.classList.remove('active')

         setTimeout(() => {
            // update the score and progress AFTER the hide animation has finished
            setLessonScore({ current: 1, total: lessonScore.total + lessonScore.current })
            setLessonProgress({ section: lessonProgress.section, question: Number(lessonProgress.question) + 1 })
            // type guard
            userAnswer.current && (userAnswer.current.value = '')

            // remove the active class from all the hints
            for (let i = 0; i < questionHints.current.length; i++) {
               questionHints.current[i]?.classList.remove('active')
            }

            // add the active class back to reveal the new question
            lessonQuestionCard.current && lessonQuestionCard.current.classList.add('active')
         }, 500)

      } else if (userAnswer.current && userAnswer.current.value.toLowerCase() !== '') {
         // if the answer is incorrect, replace the hints with the answer
         questionHints.current[1].classList.add('active')
         setLessonScore({ current: 0, total: lessonScore.total })
      }
   }

   const revealHint = (e: any) => {
      if (!e.target.closest('.lqcm-hint').classList.contains('active')) {
         e.target.closest('.lqcm-hint').classList.add('active')
         setLessonScore({ current: lessonScore.current - 0.2, total: lessonScore.total })
      }
   }

   return (
      <main className="lesson">
         <div className="row justify-content-between">
            <div className="col-lg-9">
               <h1 className="lesson-heading">{lessonData.title}</h1>

               <LessonIntro {...{ lessonSection, lessonProgress, lessonScore, donutImage } } />

               <div className="row">
                  <div className="col-lg-9">

                     {// Immediately Invoked Function Expression (IIFE)
                     (() => {
                        switch (lessonProgress.question) {
                           // if the lesson is complete, show the lesson complete screen
                           case lessonSection.questions.length: return <SectionComplete {...{ lessonScore, dictionaryWords, lessonSection }} />
                           // if the lesson is not complete, show the lesson question screen
                           default: return <LessonQuestion {...{ lessonQuestion, lessonProgress, lessonQuestionCard, lessonLanguages, questionHints, userAnswer, revealHint, submitAnswer }} />
                        }
                     })()}

                  </div>
                  <div className="col-lg-3">
                     <CheatSheet {...{ dictionaryWords }} />
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <DictionarySideCard />
            </div>
         </div>
      </main>
   )
}

/*

What do we need to do?

- We need to create the dictionary side card
- We need to display the selected dictionary words
- 


*/

export default Lesson