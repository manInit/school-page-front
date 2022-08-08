import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Button({ children, ...props }) {
    const navigator = useNavigate()
    return (
        <input className={props.className}
            type={'button'}
            style={props.style}
            value={props.value}
            onClick={()=>navigator(props.link)}>
            {children}
        </input>
    )
}