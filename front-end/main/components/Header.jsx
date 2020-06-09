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
            <div className="row">
                <Field 
                name="name"
                component="input"
                type="text"
                className="header_input_name h3 col-12 col-md-8 "
                placeholder="Seu Nome" />
                <div className="col-12 col-md-4">
                    {props.children}
                </div>
            </div>
            
            
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

    /** wrap get user data method */
        const _getUserData = () => {

            /** get user data fron database */
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
            } ,
            err => console.log(err)  )
      }


    /** RENDER the form */
    return( 
      <header>
          <Form onSubmit={handleSubmit}>
              Imagem
          </Form>
      </header>
    )
}



export default Header