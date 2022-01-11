import React, { useState, useContext } from 'react'
import styles from '../Home/LoginForm.module.css'
import imagem from '../../assets/img-login.png'
import { useNavigate } from 'react-router-dom';
import StoreContext from '../Context/Context'
import Button from '../Utils/Button'


function initialState(){
  return { user: '', password: ''}
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const LoginForm = () => {

    const [values, setValues] = useState(initialState)
    const [error, setError] = useState(null);
    const {setToken} = useContext(StoreContext)
    const navigate = useNavigate()
 
    function onChange(event){
      const {value, name} = event.target
      setValues({
        ...values,
        [name]: value,
      })
    }

    function onSubmit(event) {
      event.preventDefault()
      const { token, error } = login(values); 
      if (token) {
        setToken()
        navigate('/resilia_projeto_mod5/dashboard');
      }
      setError(error);
      setValues(initialState)
    }

    return (
      
      <section className={styles.mainLogin}>
        
        <div className={styles.leftLogin}>
        <h1>Hotel California</h1>
        <img src={imagem} alt='imagemInicial' className={styles.leftLoginImage}></img>
        </div>
        <div className={styles.rightLogin}>
          <form className={styles.homeForm} onSubmit={onSubmit}>
            <div className={styles.cardLogin}>
                <h1>Acesse sua conta</h1>
                <p>Ao acessar este site, você confirma que este computador está em conformidade com a política de segurança da sua organização.</p>
                <div className={styles.textfield}>
                    <label htmlFor="user">Usuário</label>
                    <input 
                    id='user'
                    type='text' 
                    name='user' 
                    placeholder="conta@example.com"
                    onChange={onChange}
                    value={values.user} />
                </div>
                <div className={styles.textfield}>
                    <label htmlFor="password" >Senha</label>
                    <input
                    id="password"
                    type='password' 
                    name='password' 
                    placeholder="Senha" 
                    onChange={onChange}
                    value={values.password}
                    />
                </div>
                <Button
                  className={styles.btnLogin}
                  type="submit"
                  theme="contained-green"
                  rounded
                >
                Entrar
                </Button>
                {/* <Link  to='/resilia_projeto_mod5/dashboard'>Entrar</Link> */}
            </div>
            {error && (<div className={styles.loginError}>{error}</div>)}
            </form>
        </div>
      </section>
    )
}

export default LoginForm

