import React, { useEffect, useState } from 'react'

function Req(props) {

  const [data, setData] = useState([]) 

    useEffect(()=>{
        request()

    }, [])

  async function request() {
    const response = await fetch(props.info.url)
    const json = await response.json()
    // console.log(json)
    return setData(json)
}

  return (
  <div >
    {console.log(data)}
    <h2>{props.info.nome}</h2>
    

  </div> 
  )
}

export default Req
