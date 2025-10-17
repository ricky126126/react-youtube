import React from 'react'

const Card = (props) => {
  return (
  <>
  
  
<div className="card">

<img src="https://plus.unsplash.com/premium_photo-1760531730393-f210acf4d104?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600" alt="" />

<h1> {props.user} , {props.age}</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>


<button>check it out</button>

</div>

  </>
  )
}

export default Card