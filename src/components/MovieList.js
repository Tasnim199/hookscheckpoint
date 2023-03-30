import React from 'react'
import MovieCards from './MovieCards'

export default function Movielist({movies , byname, byrate,deleteMovie}) {
  return (
    <div className='movies-list'> {movies.filter((el)=>el.name.toLowerCase ().includes(byname.toLowerCase())&& el.rating>= byrate)
    .map((el)=> (
        <MovieCards deleteMovie={ deleteMovie} movie={el}/> 
    )) }
    </div>
  )
}
