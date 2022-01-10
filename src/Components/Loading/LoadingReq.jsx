import React from 'react'
import styles from '../Loading/Loading.module.css'


const LoadingReq = (props) => {
    if(!props.show){
        return null
    }
    return (
        <div className={`${styles.loader}`}>
            <h1 className={styles.titleLoading}>Carregando...</h1>  
             <div className={styles.skFadingCircle}>
                <div className={`${styles.skCircle1} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle2} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle3} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle4} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle5} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle6} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle7} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle8} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle9} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle10} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle11} ${styles.skCircle}`}></div>
                <div className={`${styles.skCircle12} ${styles.skCircle}`}></div>
            </div>
        </div>
    )
}

export default LoadingReq