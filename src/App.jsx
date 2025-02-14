import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [question, setQuestion] = useState("");
  const [answer,setAnswer] = useState("");

  async function generateAnswer(){
    setAnswer(<span className = "loading">Loading...</span>)
    const response = await axios({
      url : "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCCmSmYBEGldGhP5HR5TPdB6TUuW5pMEiA",
      method : "post",
      data :{
        "contents": [{
          "parts":[{"text": question}]
          }]
         }
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }

  return (
    <div className="container">
    
    
    <h1>Chat AI </h1>
    <textarea value = {question} onChange={(e)=>setQuestion(e.target.value)} cols="30" rows="6"></textarea>
    <button onClick={generateAnswer}>Generate Answer</button>
    <pre>{answer}</pre>

    </div>
   
  )
}

export default App
