
import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { moviesItems } from './movies';

function App() {
const [movies, setmovies] = useState(moviesItems);
const [byname, setByname] = useState("");
const [byrate, setByrate] = useState(0); 

const Add =(newMovie)=>{
setmovies([...movies,newMovie]); 
};
const deleteMovie=(name)=>{
 const newList= movies.filter((el ) => el.name !==name);
 setmovies(newList);
};
  return (

    <div className="">
<SearchBar setByname={setByname} setByrate={setByrate}/> 
<MovieList movies={ movies} byname={byname} byrate={byrate} deleteMovie={deleteMovie}/>
<AddMovie Add={Add }/>


    </div>
  );
}

export default App;
