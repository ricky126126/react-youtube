import React, { useState } from 'react'

const Input = () => {


  const [title, settitle] = useState('')

  return (
   <>
   
   
   <form onSubmit={(e)=>{
    e.preventDefault()
    
    console.log(title)

settitle('')

   }}>

<input

value={ title}

onChange={(e)=>{
    settitle(e.target.value)
    // console.log(e.target.value)
}}


type="text" placeholder='enter the task:-' />


<button>submit</button>

   </form>

   </>
  )
}

export default Input