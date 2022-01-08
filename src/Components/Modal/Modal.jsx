import React from 'react'
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
            </div>   
        </div>
    )
}


export default Modal

