import React from 'react'

function Dictionary() {
   return (
      <div className="dictionary-container">
         <div className="dictionary-popup">
            
         </div>
         <div className="dictionary-card side-card">

         </div>
      </div>
   )
}

/*

In our dictionary, we need to know what lesson the user is currently on, we will use this to determine which words should be shown in the dictionary
The dictionary should contain words relevant to the user's progression

Iterate over every lesson < the current lesson, and add all the words to the dictionary

The user should be able to select words from the dictionary to add to their cheat sheet. This will reduce the maximum score the user can get on the lesson

The words in the dictionary should show their score, so that the user can easily see which words they are struggling with

The user should be able to choose whether to temporarily reveal a translation, or to add the word to their cheat sheet

*/

export default Dictionary