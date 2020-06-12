import React from 'react'

export default props => (
    <div className="exp_academic card bg-dark">
        <div className="exp_academic_header card-header">
            <h2> <span className="text-primary"> {props.span} </span> <br/> {props.title} </h2>
        </div>
        <div className="exp_academic_body card-body">
            {props.children}
        </div>
    </div>
)