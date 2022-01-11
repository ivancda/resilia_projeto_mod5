import React from 'react'
import styles from './Select.module.css'

const Select = (props) => {
    return (
        <>
            <label htmlFor={props.name}>{props.text}</label>
            <select className={styles.selectInput} onChange={props.change} value={props.value} name={props.name} defaultValue={props.default} onFocus={props.focusDefault}>
                <option value={props.defaultValue} disabled>{props.defaultText}</option>
                {props.items.map(item => {
                    return <option value={item.value}> {item.text}</option>
                })}
            </select>
        </>
    )
}

export default Select
