import React from 'react'
import '../styles/Square.css'

export default function Square ({onClick, value}) {
    
    return(
        <button 
            className="square"
            onClick={onClick}>
            {value}
        </button>
    )
        
    
}