import React, { useState } from 'react'

export default function Addmovie({Add} ) {
    const [movie, setMovie] = useState({name:"", description :"" , rating:0 , image:"",})
    const [show, setShow] = useState(false)
  return (
    <div>
    <button className='btn-add' onClick={()=> setShow(true)}> 
        Add movie 
    </button>
    { show &&(
        <div className='modal-bg'> 
        <div className='modal-content '>
    
        <input type="text" placeholder='movie name' onChange={(e)=> setMovie({...movie,name : e.target.value})}/>
        <input type="text" placeholder='movie description' onChange={(e)=> setMovie({...movie,description : e.target.value})}/>
        <input type="text" placeholder='movie image ' onChange={(e)=> setMovie({...movie,image : e.target.value})}/>
        <input type="number" placeholder='rating ' onChange={(e)=> setMovie({...movie,rating : e.target.value})}/>
        <button onClick={()=> setShow(false)}> Cancel </button>
        <button onClick={()=> {Add(movie); setShow(false); } } > Confirm  </button>
        </div>
         </div>)
    }
    </div>
  )
}
