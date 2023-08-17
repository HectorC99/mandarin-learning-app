import './Dictionary.scss'
import { useRef } from 'react'

function Dictionary() {
  const dictionaryContainer = useRef<HTMLDivElement>(null)

  return (
    <div ref={dictionaryContainer} className="dictionary-container">
      <div className="dictionary">
        <div className="dictionary-header">
          <div className="dh-title">
            <h3>Dictionary</h3>
            <p>Keep track of all your learnt words</p>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8674 15.7233H16.7381L16.3379 15.3373C17.7387 13.7078 18.582 11.5923 18.582 9.29102C18.582 4.15952 14.4225 0 9.29102 0C4.15952 0 0 4.15952 0 9.29102C0 14.4225 4.15952 18.582 9.29102 18.582C11.5923 18.582 13.7078 17.7387 15.3373 16.3379L15.7233 16.7381V17.8674L22.8702 25L25 22.8702L17.8674 15.7233ZM9.29102 15.7233C5.73185 15.7233 2.85878 12.8502 2.85878 9.29102C2.85878 5.73185 5.73185 2.85878 9.29102 2.85878C12.8502 2.85878 15.7233 5.73185 15.7233 9.29102C15.7233 12.8502 12.8502 15.7233 9.29102 15.7233Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="dictionary-main">
          <div className="dm-words">
            {
              // we need to break down the list of words by letter
            }
          </div>
          <div className="dm-definition">
            <h2>Eliminate</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dictionary