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
              <th>{key}</th>
            ))}
              <th><button>Criar fatura</button></th>
          </tr>
        )}
        {data.map((item) => (
          <tr>
            {console.log(item.ID)}
            {Object.values(item).map((val) => (
              <td >{val}</td>
            ))}
              <td>
                <button key={item.ID} onClick={item.ID}>Editar</button>
                <button>Excluir</button>
              </td>
          </tr>
        ))}
      </thead>
    </table>
  )
}

export default Req
