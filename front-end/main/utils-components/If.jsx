import React from 'react'

const If = props => {
    if(props.show){
        return props.children
    }
    return false
}
export default If