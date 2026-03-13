import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import User from './components/User'
import { useEffect } from 'react'

const App = () => {

  const [allData, setAllData] = useState([])

  const  getData = async ()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response);
    setAllData(response.data)
    
  }

  useEffect(function(){
    getData()
  },[])
  // async function getData(){
  //   const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')//await ka matlb wait karo jab tak promise resolve nhi hota
  //   console.log(response);
  //   console.log(response.data);//data ko direct print karega
  // }

  return (
    <div>
      
      <div className='all-cards'>
        {allData.map(function(elem,idx){
        return <div key={idx}>
          <User elem= {elem}/>
        </div>
      })}
      </div>
    </div>
  )
}

export default App
