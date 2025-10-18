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



`


 <div className="cards">


<Card   user='goku'  age={18} />
<Card user='itachi' img='https://plus.unsplash.com/premium_photo-1760466136429-5d0d6189f9f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
<Card/>



</div>




css;-




.card{
    width: 400px;
    height: 450px;
    background-color:gray;
    border-radius: 20px;
}

.cards{
    display: flex;
    flex-wrap: wrap;
 padding:20px 120px;
    gap: 20px;
}


.card img{
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 30px 80px;
    border-radius: 20px;
}


.card h1{
    font-size: 32px;
    margin:3px 130px;
}


.card p{
    font-size: 22px;
margin-left: 27px;
}


.card button{
    padding: 12px;
    display: block;
    margin: 20px 130px;
    font-size: 17px;
    border: none;
    border-radius: 12px;
}



`