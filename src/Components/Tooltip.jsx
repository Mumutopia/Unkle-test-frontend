import React from 'react'
import "./Tooltip.css"

export default function Tooltip({position,content}) {
    return (
        <div className={position}>
            {content}
        </div>
    )
}
