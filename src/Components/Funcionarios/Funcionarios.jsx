import React, {  useState } from 'react'
import styles from './Funcionarios.module.css'
import Modal from '../Modal/Modal'
// import Select from '../Select/Select'
import LoadingReq from '../Loading/LoadingReq'

const Funcionarios = (props) => {


    const [loading, setLoading] = useState(false);

    const [msg, setMsg] = useState('')

    const [deleteModal, setDeleteModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)
    const [postModal, setPostModal] = useState(false)
    const [alertModal, setAlertModal] = useState(false)

    const [data, setData] = useState([])
    const [id, setId] = useState(0)

    const [postData, setPostData] = useState({
        "Nome_Completo": "",
        "Email": "",
        "Telefone": "",
        "Endereco": "",
        "RG": "",
        "CPF": "",
        "Data_de_Nascimento": "",
        "Cargo": "",
        "Turno": "",
        "Setor": "",
        "Remuneracao": ""
      })
    
      //Funções Set//
    function atualizaFuncionario(id){
        setId(id)
        setUpdateModal(true)
    }

    function deletaFuncionario(id){
        setId()
        setDeleteModal()
    }

    function postFuncionario(){
        setPostModal(true)
    }
    //-----------------------//

    const handleInputChange = e => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    };

    function handleSubmit(event) {
        event.preventDefault();
    }

    // useEffect(() => {
    //     request()
    // }, [request])


    //-------------GET--------------//
    async function request() {
        setLoading(true)
        const response = await fetch(props.info.url)
        const json = await response.json()
        setLoading(false)
        return setData(json.Faturas)
    
    }
    //-----------POST--------------//
    async function post(){
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
    //----------------------UPDATE----------------//
    async function update(id, data){
        setLoading(true)
        const response = await fetch(`${props.info.url}`,
        {
            method: 'PATCH',
            headers: {
              Accept: 'application/form-data',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        )
        const json = await response.json()
        request()
        setUpdateModal(false)
        setLoading(false)
        setMsg(json.mensagem||json.error)
        setAlertModal(true)
    }
    //------------------------DELETE-----------------------//
    async function delet(id){
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
    console.log(id)
    setMsg(json.mensagem||json.error)
    setAlertModal(true)
  }
  //-------------------------------------------------//
  const [bra, setBra] = useState("")
  const [searchColumns,setSearchColumns] = useState(['ID','Nome_Completo','RG','CPF'])

  function search(rows){
    return rows.filter((row) => 
    searchColumns.some(
      (column) => row[column]?.toString().toLowerCase().indexOf(bra.toLowerCase())>-1
      )
      )
    }

    const columns = data[1] && Object.keys(data[0])


    return (
    loading ? <LoadingReq show={loading} /> :
    <div>
        {/* <div>
            <input className={styles.search} type="text" value={bra.toLowerCase()} onChange={(e) => setBra(e.target.value)} placeholder='Buscar...'/>
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
        </div> */}
        <table >
            <thead>
                <tr>
                <th colSpan="6" >Funcionários</th>
                <th>Ações</th>
                </tr>
                <tr>{data[0] && columns.map((heading)=><th>{heading.toLowerCase().replace(/_/g, ' ')}</th>)}<th><button className={styles.postBtn} onClick={() => postFuncionario() } >Adicionar Funcionário</button></th></tr>
            </thead>
            <tbody>
                {search(data).map(row=> <tr>
                    {
                        columns.map(column => <td>{row[column]}</td>)
                    }
                     <td>
                     <button className={styles.updateBtn} onClick={() => atualizaFuncionario(row.ID)}>Editar</button>
                  <button className={styles.deleteBtn} onClick={() => deletaFuncionario(row.ID)}>Excluir</button>
                </td>
                </tr>)}
            </tbody>
        </table>
        <Modal text="Adicionar Funcionário" onClose={() => setPostModal(false)} show={postModal}>
          <form onSubmit={handleSubmit}>
            {/* <Select items={itemsMetodo}
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
            /> */}
            <label htmlFor="Nome_Completo">Nome completo do funcionário</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Nome_Completo} name="Nome_Completo" />
            <label htmlFor="Email">E-mail</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Email} name="Email" />
            <label htmlFor="Telefone">Telefone</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.Telefone} name="Telefone" />
            <label htmlFor="Endereco">Endereço</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Endereco} name="Endereco" />
            <label htmlFor="rg">RG</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.rg} name="RG" />
            <label htmlFor="cpf">CPF</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.cpf} name="cpf" />
            <label htmlFor="Data_de_Nascimento">Data de Nascimento</label>
            <input className="valorPagamento" type="date" onInput={handleInputChange} value={postData.Data_de_Nascimento} name="Data_de_Nascimento" />
            <label htmlFor="Cargo">Cargo</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Cargo} name="Cargo" />
            <label htmlFor="Turno">Turno</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Turno} name="Turno" />
            <label htmlFor="Setor">Setor</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Setor} name="Setor" />
            <label htmlFor="Remuneracao">Remuneracao</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.Remuneracao} name="Remuneracao" />
           
        
            <div className={styles.divBtn}>
              <button className={styles.deleteBtn} onClick={() => setPostModal(false)}>Cancelar</button>
              <button className={styles.updateBtn} onClick={() => post(postData)}>Adicionar</button>
            </div>
          </form>
        </Modal>

        <Modal text={`Editar dados do Colaborador nº: ${id}`} onClose={() => setUpdateModal(false)} show={updateModal}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Nome_Completo">Nome completo do funcionário</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Nome_Completo} name="Nome_Completo" />
            <label htmlFor="Email">E-mail</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Email} name="Email" />
            <label htmlFor="Telefone">Telefone</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.Telefone} name="Telefone" />
            <label htmlFor="Endereco">Endereço</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Endereco} name="Endereco" />
            <label htmlFor="rg">RG</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.rg} name="RG" />
            <label htmlFor="cpf">CPF</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.cpf} name="cpf" />
            <label htmlFor="Data_de_Nascimento">Data de Nascimento</label>
            <input className="valorPagamento" type="date" onInput={handleInputChange} value={postData.Data_de_Nascimento} name="Data_de_Nascimento" />
            <label htmlFor="Cargo">Cargo</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Cargo} name="Cargo" />
            <label htmlFor="Turno">Turno</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Turno} name="Turno" />
            <label htmlFor="Setor">Setor</label>
            <input className="valorPagamento" type="text" onInput={handleInputChange} value={postData.Setor} name="Setor" />
            <label htmlFor="Remuneracao">Remuneracao</label>
            <input className="valorPagamento" type="number" onInput={handleInputChange} value={postData.Remuneracao} name="Remuneracao" />
           

            <div className={styles.divBtn}>
              <button className={styles.deleteBtn} onClick={() => setUpdateModal(false)}>Cancelar</button>
              <button className={styles.updateBtn} onClick={() => update(id, postData)}>Editar</button>
            </div>
          </form>
        </Modal>
        <Modal text={`Excluir funcionário: ${id}?`} onClose={() => setDeleteModal(false)} show={deleteModal}>
          <p className={styles.warning}>Tem certeza que deseja excluir os dados do funcionário {id}? Esta ação não poderá ser desfeita.</p>
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


export default Funcionarios




