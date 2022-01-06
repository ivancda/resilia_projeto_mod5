import React, { useEffect, useState } from 'react'
import styles from './Faturas.module.css'
import Modal from '../Modal/Modal'



function Req(props) {

  const [show, setShow] = useState(false)
  const [data, setData] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    
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
              <th><button >Criar fatura</button></th>
            </tr>
          )}
          {data.map((item) => (
            <tr>
              {Object.values(item).map((val) => (
                <td >{val}</td>
              ))}
              <td>
                <button onClick={() => setShow(true)}>Editar</button>
                <button onClick={() => delet(item.ID)}>Excluir</button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
      <Modal text="Editar fatura" onClose={() => setShow(false)} show={show}>

        <form>
          <label htmlFor="metodo">Metodo de pagamento:</label>
          <select className="metodo" >
            <option value="cartao de credito"> cartao de credito </option>
            <option value="cartao de debito"> cartão de debito </option>
            <option value="pix"> pix </option>
            <option value="dinheiro"> dinheiro </option>
          </select>
          <label htmlFor="id_select">Status de pagamento:</label>
          <select className="status">
            <option value="pago"> pago </option>
            <option value="pendente"> pendente </option>
            <option value="cancelado"> cancelado </option>
          </select>
          <label htmlFor="valorPagamento">Valor total da fatura:</label>
          <input className="valorPagamento" type="number" min="1" step="any" />
        </form>
      </Modal>
    </div>
  )
}

export default Req
