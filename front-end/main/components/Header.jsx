import './Header.css'

import React,{useEffect} from 'react'
import {reduxForm,Field} from 'redux-form'
import { postUser, getUserData} from '../services/user.js'

import {initialize}from 'redux-form'
import {useDispatch,useSelector} from 'react-redux'

let Form = props => {

    const { handleSubmit } = props

    return(<form onSubmit={handleSubmit} >
        <div className="container">
            <Field 
                name="name"
                component="input"
                type="text"
                className="header_input_name h3 col-12 "
                placeholder="Seu Nome" />
        </div>
    </form>)
}
Form = reduxForm({
    form:'user_form'
})(Form)

let Header = props => {

    let dispatch = useDispatch()
    
    /** when app starts/update */
        useEffect( () => {
            _getUserData()            
        })

    /** wrap get user data */
        const _getUserData = () => {
            getUserData(
                props.user._id ,
                res => {
                    dispatch(initialize('user_form',res))                    
                },
                err => console.log(err)
            )
        }
    
    /** when user submit form */
      const handleSubmit = (data) => {
          
          let user = { _id : props.user._id , ...data }

          postUser(
            user ,
            res => {
                console.log('just i have submited in header the user data ')
                //initialize('user_form',user)
            } ,
            err => console.log(err)  )
      }


    /** RENDER the form */
    return( 
      <header>
          <Form onSubmit={handleSubmit}/>
      </header>
    )
}



export default Header