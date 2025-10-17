import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
   <>
   
   <div className="cards">


<Card   user='goku'  age={18} />
<Card user='itachi' img='https://plus.unsplash.com/premium_photo-1760466136429-5d0d6189f9f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
<Card/>



   </div>
   
   </>
  )
}

export default App