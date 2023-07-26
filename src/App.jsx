import { useState } from 'react'

import './App.css'
import DisplayData from './components/DisplayData'
import Form from './components/Form'

function App() {
const[data, setData]=useState({})

async function getData (input){


let key = `3a41d1e7`
let api = `https://www.omdbapi.com/?t=${input}&apikey=${key}`

let response = await fetch(api);
let movie = await response.json();
console.log(movie);

setData(movie)



//async function logMovies() {
//   const response = await fetch("http://example.com/movies.json");
//   const movies = await response.json();
//   console.log(movies);
// }



//https://www.omdbapi.com/?i=tt3896198&apikey=3a41d1e7

//base url
//https://www.omdbapi.com

//query parameter
//?i=tt3896198&apikey=3a41d1e7

//use different parameters
//?t=avatar&apikey=3a41d1e7

//were going to you



}

  return (
    
    <div>
      <Form getData={getData}/>
    <DisplayData data={data}/>
    </div>
  )
}

export default App
