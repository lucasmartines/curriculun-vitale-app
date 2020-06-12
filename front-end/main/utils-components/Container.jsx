import React from 'react'


export default  props => (
    <div className={`container ${props.containerClass || ''}`}>
        <div className={`row ${props.rowClass || ''}`}>
            {props.children}
        </div>
    </div>
)