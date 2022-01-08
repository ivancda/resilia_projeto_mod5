import React from 'react'

const Select = (props) => {
    return (
        <select onChange={props.change} value={props.value} name={props.name}>
            {props.items.map(item => {
                return <option value={item.value}> {item.text}</option>
            })}
        </select>
    )
}

export default Select
