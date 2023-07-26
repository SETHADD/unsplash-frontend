
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [searchQuery, setsearchQuery] = useState("")
const [image, setimage] = useState("")

const handleSearch = (event) =>{
  setsearchQuery(event.target.value)
  // console.log(searchQuery)
}

  const handleImage = async ()=>{
    try{
  let randomNumber = Math.floor(Math.random()*10)
  console.log(randomNumber)
  const API = `http://localhost:8090/photos?subject=${searchQuery}`
  const res = await axios.get(API)
  setimage(res.data[randomNumber].img_url)
  console.log(res)
}catch(error){
  console.log(error)
}
}



  return (
    <div className="App">
  <h1>Find your image</h1>
  <input type='text'placeholder='enter image subject' onChange={handleSearch}></input>
  <button onClick={handleImage}>Explore!</button>
  { image && <img src= {image} alt={searchQuery}></img>}
    </div>
  );
}

export default App;
