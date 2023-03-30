import React from 'react'
import ReactStars from 'react-stars'

export default function Searchbar({setByname,setByrate}) {
  return (
    <div className='search-bar'>
        <div className='search-input'> 
        <img src='https://tse4.mm.bing.net/th?id=OIP.1xYXwLGnm1lyOK0gheG35AHaHa&pid=Api&P=0' alt='loupe'/>
            <input type="text" placeholder='Type movie name ' onChange={(e) => setByname(e.target.value)}/>
            </div>
   
    <ReactStars
  count={5}
  onChange={(newValue)=>setByrate (newValue)}
  size={24}
  color2={'#ffd700'} />
    </div>
  )
}
 