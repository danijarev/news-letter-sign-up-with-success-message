import { useState } from 'react'
import illsImg from "illustration-sign-up-mobile.png"

import Landing from './components/Landing'
import ThankYouPage from './components/ThankYouPage'

import './App.css'

function App() {
  const [showingPage, setShowingPage] = useState('landing');
  const [inputValue, setInputValue] = useState("");
  

  function handleClick(pageToShow) {
    let imgSection = document.querySelector('.image-section');
    setShowingPage(pageToShow);
    if(pageToShow === 'thankyou') {
      imgSection.classList.add('hidden');
    } else {
      imgSection.classList.remove('hidden');
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit() {
    let invalidTag = document.querySelector('#invalid-email-tag');
    if(validateEmail(inputValue)) {
      return handleClick('thankyou');
    } else {
      invalidTag.classList.remove('hidden');
    }
  }

  return (
  <div className='body'>
    <main className={showingPage === 'landing' ? "container" : "success-container"}>
    <section className="image-section">
    <img className="illustration-img" src={illsImg} alt="" />
    </section>
    <section className="content-section">
    {showingPage === 'landing' ? 
    (<Landing onButtonClick={() => handleSubmit()} emailValue={inputValue} onEmailInput={handleInputChange}/>) :
    <ThankYouPage onButtonClick={() => handleClick('landing')} emailValue={inputValue} />}    
    </section>  
    </main>
    <footer>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/danijarev">Danilo Arevalo</a>.
      </div>
    </footer>
  </div>
  )
}

export default App
