import React from 'react'
import styles from './Suporte.module.css'

function Suporte() {
    return (
        <div className={styles.container}>
            <img src="https://i.pinimg.com/originals/1f/3c/c2/1f3cc216d3bcd5584f87c7b7f5b978a2.jpg" className={styles.item3} alt="coruja" />
            <h1 className={styles.item4}>Suporte rápido</h1>
            <form className={styles.item1}>
                <label htmlFor="Nome" className={styles.titleLabel}>Digite seu nome:</label>
                <input type="text" name="Nome" placeholder="Nome" required />
                <label htmlFor="Email" className={styles.titleLabel}>Digite seu email:</label>
                <input type="email" name="Email" placeholder="Email" required />
                <label htmlFor="Telefone" className={styles.titleLabel}>Telefone para contato:</label>
                <input type="tel" name="Telefone" placeholder="(xx)xxxxx-xxxx" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required />
                <label htmlFor="mensagem" className={styles.titleLabel}>Descreva seu problema:</label>
                <textarea name="Mensagem" id="" cols="30" rows="8" placeholder="Digite sua mensagem..."></textarea>
                <button type="submit">Enviar</button>
            </form>
            <div className={styles.item2}>
                <div>
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="form1" />
                    <h3>Endereço</h3>
                    <p className={styles.item5}>Rua Resilia - nº08, Coruja, São Paulo</p>
                </div>
                <div>
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="form2"/>
                    <h3>Telefone</h3>
                    <p className={styles.item5}>(11)8888-88888</p>
                </div>
                <div>
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="form3"/>
                    <h3>Email</h3>
                    <p className={styles.item5}>suporte@coruja.com</p>
                </div>
            </div>
        </div>
    )
}

export default Suporte
