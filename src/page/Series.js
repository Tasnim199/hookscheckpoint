import React from 'react'
import Movielist from '../components/MovieList'

export default function series({Series}) {
  return (
    <div>
        <Movielist movies={ Series} />
    </div>
  )
}

