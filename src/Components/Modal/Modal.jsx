import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.css'

const Modal = (props) => {
    if(!props.show){
        return null
    }
    return (
        <div className={styles.modal} onClick={props.onClose}>
            <div className={styles.modalContent} onClick={e=>e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h4 className={styles.modalTitle}>
                        {props.text}
                    </h4>
                </div>
                <div className={styles.modalBody}>
                    {props.children}
                </div>
                <div className={styles.modalFooter}>
                    <button>Enviar</button>
                    <button onClick={props.onClose}>Fechar</button>
                </div>
            </div>   
        </div>
    )
}

Modal.propTypes = {

}

export default Modal

