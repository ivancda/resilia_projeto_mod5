import React, { useEffect, useState } from 'react'
import styles from './Faturas.module.css'
import Modal from '../Modal/Modal'
import Select from '../Select/Select'
//import ReqFaturas from './ReqFaturas'
import LoadingReq from '../Loading/LoadingReq'



function Faturas(props) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    },2000)
  }, [])

  const itemsMetodo = [{
    value: "cartao de credito",
    text: "cartão de credito"
  }, {
    value: "cartao de debito",
    text: "cartão de debito"
  }, {
    value: "pix",
    text: "pix"
  }, {
    value: "dinheiro",
    text: "dinheiro"
  }]

  const itemsStatus = [{
    value: "pago",
    text: "pago"
  }, {
    value: "pendente",
    text: "pendente"
  }, {
    value: "cancelado",
    text: "cancelado"
  }]

  const [show, setShow] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  const [postModal, setPostModal] = useState(false)


  const [data, setData] = useState([])

  const [id, setId] = useState(0)

  const [postData, setPostData] = useState({
    "metodo_pagamento": "",
    "status_pagamento": "",
    "valor_total": ""
  })

  function updateEvent(id) {
    setId(id)
    setUpdateModal(true)
  }

  const handleInputChange = e => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  };

  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert("teste")
    setShow(false)
    
  }

  useEffect(() => {
    setIsLoading(true)
    request()
    setIsLoading(false)

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
    setPostModal(false)
  }

  async function update(id, data) {
    const response = await fetch(`${props.info.url}/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const json = await response.json()
    request()
    setUpdateModal(false)
    console.log(json)
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (

    loading ? <LoadingReq/> :

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
              <th><button className={styles.postBtn} onClick={() => setPostModal(true)} >Criar fatura</button></th>
            </tr>
          )}
          {data.map((item) => (
            <tr>
              {Object.values(item).map((val) => (
                <td >{val}</td>
              ))}
              <td>
                <button className={styles.updateBtn} onClick={() => updateEvent(item.ID)}>Editar</button>
                <button className={styles.deleteBtn} onClick={() => setDeleteModal(true)}>Excluir</button>
              </td>
            </tr>
          ))}
        </thead>
      </table>
      <Modal text="Criar fatura" onClose={() => setPostModal(false)} show={postModal}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="metodo">Metodo de pagamento:</label>
          <Select items={itemsMetodo} change={handleInputChange} value={postData.metodo_pagamento} name={"metodo_pagamento"} />
          <label htmlFor="status">Status de pagamento:</label>
          <Select items={itemsStatus} change={handleInputChange} value={postData.status_pagamento} name={"status_pagamento"} />
          <label htmlFor="valor">Valor total da fatura:</label>
          <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.valor_total} name="valor_total" />
          <div className={styles.divBtn}>
          <button className={styles.deleteBtn} onClick={() => setPostModal(false)}>Cancelar</button>
          <button className={styles.updateBtn} onClick={() => post(postData)}>Criar</button>
          </div>
        </form>
      </Modal>
      <Modal text="Editar fatura" onClose={() => setUpdateModal(false)} show={updateModal}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="metodo">Metodo de pagamento:</label>
          <Select items={itemsMetodo} change={handleInputChange} value={postData.metodo_pagamento} name={"metodo_pagamento"} />
          <label htmlFor="status">Status de pagamento:</label>
          <Select items={itemsStatus} change={handleInputChange} value={postData.status_pagamento} name={"status_pagamento"} />
          <label htmlFor="valor">Valor total da fatura:</label>
          <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.valor_total} name="valor_total" />
          <div className={styles.divBtn}>
            <button className={styles.deleteBtn} onClick={() => setUpdateModal(false)}>Cancelar</button>
            <button className={styles.updateBtn} onClick={() => update(id, postData)}>Editar</button>
          </div>
        </form>
      </Modal>
      <Modal text={`Deletar fatura número ${id}?`} onClose={() => setDeleteModal(false)} show={deleteModal}>
        <p className={styles.warning}>Tem certeza que deseja deletar a fatura {id}? está ação não pode ser desfeita</p>
        <button className={styles.updateBtn} onClick={() => setDeleteModal(false)}>Cancelar</button>
        <button className={styles.deleteBtn} onClick={() => delet(id)}>Excluir</button>
      </Modal>
    </div>
  )
}

export default Faturas
