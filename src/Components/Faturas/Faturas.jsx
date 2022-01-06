import React, { useEffect, useState } from 'react'
import styles from './Faturas.module.css'



function Req(props) {


  const [data, setData] = useState([])

  useEffect(() => {
    request()

  }, [])

  async function request() {
    const response = await fetch(props.info.url)
    const json = await response.json()
    return setData(json.Faturas)
  }

  async function delet(id) {
    const response = await fetch(`${props.info.url}/${id}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    console.log(json)
     request()
  }

  return (
    
    <table>
      <thead>
        <tr>
          <th colSpan="6" >Faturas</th>
          <th>Ações</th>
        </tr>
        {data.length > 0 && (
          <tr key={"header"}>
            {Object.keys(data[0]).map((key) => (
              <th>{key.toLowerCase().replace(/_/g,' ')}</th>
            ))}
              <th><button >Criar fatura</button></th>
          </tr>
        )}
        {data.map((item) => (
          <tr>
            {Object.values(item).map((val) => (
              <td >{val}</td>
            ))}
              <td>
                <button>Editar</button>
                <button onClick={() => delet(item.ID)}>Excluir</button>
              </td>
          </tr>
        ))}
      </thead>
    </table>
  )
}

export default Req
