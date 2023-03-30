import React from 'react'
import ReactStars from 'react-stars'

export default function MovieCards({movie,deleteMovie}) {
  return (
    <div className='movie-card' style={{ backgroundImage :`url(${movie.image})`}}> 
    <div className='movie-content'><h1> {movie.name}</h1> 
    <p> description : {movie.description } </p>
    <ReactStars
  count={5}
  onChange={()=> {}}
  size={24}
  value={movie.rating}
  color2={'#ffd700'}
  edit={false}  
  />

    </div>
        <button onClick={()=> deleteMovie(movie.name)}> delete </button>
    </div>
  )
}
