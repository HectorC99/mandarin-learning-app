import './CheatSheet.scss'

function CheatSheet({ dictionaryWords }: any) {
   return (
      <div className="lesson-card cheat-sheet">
         <h3>Cheat Sheet</h3>
         <div className="cs-words">
            {dictionaryWords.map((word: any, i: number) => (
               <div className="cs-word" key={i}>
                  <h3>{word.word}</h3>
                  <p>{word.definition}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default CheatSheet