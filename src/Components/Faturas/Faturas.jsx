import React, { useEffect, useState } from 'react'
import styles from './Faturas.module.css'
import Modal from '../Modal/Modal'



function Req(props) {

  const [show, setShow] = useState(false)
  const [data, setData] = useState([])

  const [postData, setPostData] = useState({
    "metodo_pagamento": "",
    "status_pagamento": "",
    "valor_total": ""
  })

  const handleInputChange = e => {
    setPostData({...postData, [e.target.name]:e.target.value})
  };
  
  function handleSubmit(event) {
    event.preventDefault();
    alert("teste")
    setShow(false)
  }


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

  async function post(data) {
    const response = await fetch(`${props.info.url}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

    const json = await response.json()
    console.log(data)
    console.log(json)
    request()
  }

  async function update(data) {
    const response = await fetch(`${props.info.url}/${data.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    console.log(json)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="6" >Faturas</th>
            <th>Ações</th>
          </tr>
          {data.length > 0 && (
            <tr key={"header"}>
              {Object.keys(data[0]).map((key) => (
                <th>{key.toLowerCase().replace(/_/g, ' ')}</th>
              ))}
              <th><button onClick={() => setShow(true)} >Criar fatura</button></th>
            </tr>
          )}
          {data.map((item) => (
            <tr>
              {Object.values(item).map((val) => (
                <td >{val}</td>
              ))}
              <td>
                <button onClick={() => setShow(true) }>Editar</button>
                <button onClick={() => delet(item.ID)}>Excluir</button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
      <Modal text="Criar fatura" onClose={() => setShow(false)} show={show}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="metodo">Metodo de pagamento:</label>
          <select className="metodo" onChange={handleInputChange} value={postData.metodo_pagamento} name='metodo_pagamento'>
            <option value="cartao de credito"> cartao de credito </option>
            <option value="cartao de debito"> cartão de debito </option>
            <option value="pix"> pix </option>
            <option value="dinheiro"> dinheiro </option>
          </select>
          <label htmlFor="status">Status de pagamento:</label>
          <select className="status" onChange={handleInputChange} value={postData.status_pagamento} name='status_pagamento' >
            <option value="pago"> pago </option>
            <option value="pendente"> pendente </option>
            <option value="cancelado"> cancelado </option>
          </select>
          <label htmlFor="valorPagamento">Valor total da fatura:</label>
          <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.valor_total} name='valor_total'/>
          <button onClick={()=>post(postData)}>teste</button>
        </form>
      </Modal>
    </div>
  )
}

export default Req
