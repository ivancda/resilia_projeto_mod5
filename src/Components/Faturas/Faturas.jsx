import React, { useEffect, useState } from 'react'
import styles from './Faturas.module.css'
import Modal from '../Modal/Modal'
import Select from '../Select/Select'
import LoadingReq from '../Loading/LoadingReq'


function Faturas(props) {

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
  
  const [loading, setLoading] = useState(false);
 
  const [msg,setMsg] = useState("")
  
  const [deleteModal, setDeleteModal] = useState(false)
  
  const [updateModal, setUpdateModal] = useState(false)
  
  const [postModal, setPostModal] = useState(false)
  
  const [alertModal, setAlertModal] = useState(false)

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

  function deleteEvent(id) {
    setId(id)
    setDeleteModal(true)
  }

  function postEvent(){
    
    setPostModal(true)
  }


  const handleInputChange = e => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    request()
  }, [])

  async function request() {
    setLoading(true)
    const response = await fetch(props.info.url)
    const json = await response.json()
    setLoading(false)
    return setData(json.Faturas)

  }

  async function delet(id) {
    setLoading(true)
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
    request()
    setDeleteModal(false)
    setLoading(false)
    setMsg(json.mensagem||json.error)
    setAlertModal(true)
  }

  async function post(data) {
    setLoading(true)
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
    request()
    setPostModal(false)
    setLoading(false)
    setMsg(json.mensagem||json.error)
    setAlertModal(true)
  }

  async function update(id, data) {
    setLoading(true)
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
    setLoading(false)
    setMsg(json.mensagem||json.error)
    setAlertModal(true)
  }

//filtros de busca
const [q,setQ] = useState("")
const [searchColumns,setSearchColumns] = useState(['ID','METODO_PAGAMENTO','STATUS_PAGAMENTO','DATA_CRIACAO','ULTIMA_ATUALIZACAO'])

function search(rows){
  return rows.filter((row) => 
  searchColumns.some(
    (column) => row[column]?.toString().toLowerCase().indexOf(q.toLowerCase())>-1
    )
    )
  }
  
  const columns = data[0] && Object.keys(data[0])


  return (
    loading ? <LoadingReq show={loading} /> :
      <div>
          <div>
            <input className={styles.search} type="text" value={q.toLowerCase()} onChange={(e) => setQ(e.target.value)} placeholder='Buscar...'/>
            <h2>Filtros de busca</h2>
            <div className={styles.searchBox}>
            {columns && 
              columns.map((column)=>(
                <label htmlFor={column}>
                  {column.toString().toLowerCase().replace(/_/g, ' ')}
                  <input name={column} type="checkbox" 
                    checked={searchColumns.includes(column)}
                    onChange={(e) =>{
                      const checked = searchColumns.includes(column)
                      setSearchColumns((prev)=>checked?prev.filter((sc)=>sc!==column):[...prev, column])
                    }} />
                </label>
              ))}
              </div>
          </div>
         <table >
            <thead>
                <tr>
                <th colSpan="6" >Faturas</th>
                <th>Ações</th>
                </tr>
                <tr>{data[0] && columns.map((heading)=><th>{heading.toLowerCase().replace(/_/g, ' ')}</th>)}<th><button className={styles.postBtn} onClick={() => postEvent() } >Criar fatura</button></th></tr>
            </thead>
            <tbody>
                {search(data).map(row=> <tr>
                    {
                        columns.map(column => <td>{row[column]}</td>)
                    }
                     <td>
                     <button className={styles.updateBtn} onClick={() => updateEvent(row.ID)}>Editar</button>
                  <button className={styles.deleteBtn} onClick={() => deleteEvent(row.ID)}>Excluir</button>
                </td>
                </tr>)}
            </tbody>
        </table>  
          <Modal text="Criar fatura" onClose={() => setPostModal(false)} show={postModal}>
          <form onSubmit={handleSubmit}>
            <Select items={itemsMetodo}
              change={handleInputChange}
              value={postData.metodo_pagamento}
              name={"metodo_pagamento"}
              text={"Metodo de pagamento:"}
              defaultText={'Selecione um metodo de pagamento...'}
            />
            <Select items={itemsStatus}
              change={handleInputChange}
              value={postData.status_pagamento}
              name={"status_pagamento"}
              text={"Status do Pagamento:"}
              defaultText={'Selecione o status do pagamento...'}
            />
            <label htmlFor="valor">Valor total da fatura:</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.valor_total} name="valor_total" />
            <div className={styles.divBtn}>
              <button className={styles.deleteBtn} onClick={() => setPostModal(false)}>Cancelar</button>
              <button className={styles.updateBtn} onClick={() => post(postData)}>Criar</button>
            </div>
          </form>
        </Modal>
        <Modal text={`Editar fatura número: ${id}`} onClose={() => setUpdateModal(false)} show={updateModal}>
          <form onSubmit={handleSubmit}>
            <Select items={itemsMetodo} change={handleInputChange}
              value={postData.metodo_pagamento}
              name={"metodo_pagamento"}
              text={"Metodo de pagamento:"}
            />
            <Select items={itemsStatus}
              change={handleInputChange}
              value={postData.status_pagamento}
              name={"status_pagamento"}
              text={"Status do Pagamento:"}
            />
            <label htmlFor="valor">Valor total da fatura:</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.valor_total} name="valor_total" />
            <div className={styles.divBtn}>
              <button className={styles.deleteBtn} onClick={() => setUpdateModal(false)}>Cancelar</button>
              <button className={styles.updateBtn} onClick={() => update(id, postData)}>Editar</button>
            </div>
          </form>
        </Modal>
        <Modal text={`Deletar fatura número: ${id}?`} onClose={() => setDeleteModal(false)} show={deleteModal}>
          <p className={styles.warning}>Tem certeza que deseja deletar a fatura {id}? está ação não pode ser desfeita</p>
          <button className={styles.updateBtn} onClick={() => setDeleteModal(false)}>Cancelar</button>
          <button className={styles.deleteBtn} onClick={() => delet(id)}>Excluir</button>
        </Modal>
        <Modal text={"Mensagem:"} onClose={() => setAlertModal(false)} show={alertModal}>
          <p className={styles.warning}>{msg}</p>
          <button className={styles.updateBtn} onClick={() => setAlertModal(false)}>Fechar</button>
        </Modal>
      </div>
  )
}

export default Faturas
