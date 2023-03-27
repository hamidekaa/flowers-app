import './App.css';
import Data from './Data.json';
import { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="container">
      <h1>Çiçek Sepeti</h1>
      <div className="inputContainer">
        <input type="text" className='search' placeholder='Lütfen bir çiçek ismi giriniz:)'
        onChange={(e)=> setSearchTerm(e.target.value)}/>
      </div>
      <div className="dataContainer">
       {Data.filter((val)=>{
        if(searchTerm==""){
          return val;
        }else if(val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val;
        }
       }).map((val)=>{
        return (
          <div className='data' key={val.id}>
            <img src={val.image}/> 
            <h3> {val.title} </h3>
            <p> {val.descripton} </p>
            </div>
        )
       })
       }
      </div>
    </div>
    

  );
}

export default App;
