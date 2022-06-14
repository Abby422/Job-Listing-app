import React, {useContext} from 'react'
import { tabletContext } from "../context/tablets";

function Filter() { 
  const {search, setSearch} = useContext(tabletContext)

  const handleDelete =(value)=>{
    const newSearch = search.filter(data => data!== value );
    setSearch(newSearch);
  }

 
return (

        <div className='content'>
          {search.map((searched, index) => (
          <div className='filter-name' key={searched}>
          <div>{searched}</div>
          <button onClick={()=>handleDelete(searched)}>X</button>
        </div>
          ))
            
          }
        </div>

  )
}

export default Filter