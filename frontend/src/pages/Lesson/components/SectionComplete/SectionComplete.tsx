import './SectionComplete.scss'

function SectionComplete({ lessonScore, dictionaryWords, lessonSection }: any) {
   return (
      <div className="lesson-card section-complete">
         <div className="section-complete-heading">
            <h2>You have completed Section 1</h2>
            <p>Restart or continue to the next section</p>
         </div>
         <div className="section-complete-info">
            <div className="sci-details">
               <div className="scid-item">
                  <h2>3</h2>
                  <span>
                     <p>hints</p>
                     <p>used</p>
                  </span>
               </div>
               <div className="scid-item">
                  <h2>3</h2>
                  <span>
                     <p>cheat</p>
                     <p>words</p>
                  </span>
               </div>
               <div className="scid-item">
                  <h2>3</h2>
                  <span>
                     <p>correct</p>
                     <p>answers</p>
                  </span>
               </div>
            </div>
            <div className="sci-score">
               <div className="scid-item">
                  <h2>97%</h2>
               </div>
            </div>
         </div>
         <div className="section-complete-options">
            <button>Restart</button>
            <button>Continue</button>
         </div>
      </div>
   )
}

export default SectionComplete