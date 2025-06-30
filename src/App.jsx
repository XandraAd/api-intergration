import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>res.json())
    .then((json)=>{
      setData(json);
      setLoading(false)
    
    })
    .catch((err)=>{
      console.err("failed to load",err)

    })
  })


  return (
    <>
 <h1> List of all .....</h1>
 {loading ?("loading documents"):(
  data.slice(0,8).map((comment)=>(
    <ul key={comment.id}>
      <li>{comment.email}</li>
    </ul>

  ))

 )}


 
    </>
  )
}

export default App
