import React, { useState } from 'react'

const Function = () => {


    const [user, setuser] = useState({username:'harry' , age:21})

    const [arr, setarr] = useState([10,20,30,40])


    function abc(){

                                    // first method :- 

        // var newUser = {...user}

        // newUser.username = 'goku'
        // newUser.age = 32

        // setuser(newUser)



        // second method :- 
        setuser  ( pre => ({...pre , username:'itachi uchiha' , age:26}) )
       



    }


  return (
    <>
    
    

<h1 onClick={abc}> username is   {user.username} , userage is {user.age}  </h1>


<p onClick={()=>{

setarr ([ 50,60,70,80])


}}>


array is {arr.join(', ')}


</p>

    
    </>
  )
}

export default Function