import React from 'react'
import styles from '../Home/LoginForm.module.css'
import imagem from '../../assets/img-login.png'

const LoginForm = () => {

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (
      <section className={styles.mainLogin}>
        
        <div className={styles.leftLogin}>
        <h1>Hotel California</h1>
        <img src={imagem} alt='imagemInicial' className={styles.leftLoginImage}></img>
        </div>
        <div className={styles.rightLogin}>
            <div className={styles.cardLogin}>
                <h1>Acesse sua conta</h1>
                <p>Ao acessar este site, você confirma que este computador está em conformidade com a política de segurança da sua organização.</p>
                <div className={styles.textfield}>
                    <label for="usuario">Usuário</label>
                    <input type='text' name='usuario' placeholder="conta@example.com"></input>
                </div>
                <div className={styles.textfield}>
                    <label for="senha">Senha</label>
                    <input type='password' name='senha' placeholder="Senha"></input>
                </div>
                <button onSubmit={handleSubmit} className={styles.btnLogin}>Entrar</button>
            </div>
        </div>
      </section>
    )
}

export default LoginForm

