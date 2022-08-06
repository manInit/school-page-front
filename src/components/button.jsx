import React from 'react'

export default function Button({ children, ...props }) {
    return (
        <button className={props.className}
            type={'button'}
            style={props.style}
            onClick={props.onClick}>
            {children}
        </button>
    )
}