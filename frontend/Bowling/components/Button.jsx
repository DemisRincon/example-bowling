import React from 'react'
import '../styles/Button.module.scss'
const Button = ({text,action}) => {
    return (
        <button onClick={action}>
            {text}
        </button>
    )
}

export default Button
