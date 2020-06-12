import './Header.css'

import React,{useEffect} from 'react'
import {reduxForm,Field} from 'redux-form'
import { postUser, getUserData} from '../../services/user.js'

import {initialize}from 'redux-form'
import {useDispatch,useSelector} from 'react-redux'

let Form = props => {

    const { handleSubmit } = props

    return(<form onSubmit={handleSubmit} >
        <div className="container">
            <div className="row">
                {/* the user will fill the name */}
                <Field 
                    name="name"
                    component="input"
                    type="text"
                    className="header_input_name h3 col "
                    placeholder="Seu Nome" />
                {props.children}
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
      const handleSubmit = (_user) => {
        
        /** if field is null */
        if( !_user.name.trim() )
        {   
            /** get the old value fron database, i need to discover a method of reseting
             * the form whitout going to database
             */
            getUserData( 
                props.user._id , 
                response => 
                    dispatch(initialize('user_form',response)) ,
                err      => console.warn(err)   )
            
            alert('erro não foi possivel atualizar pois o campo está vazio')
            return 
        }
          let user = { _id : props.user._id , ..._user }

          postUser(
            user ,
            res => {
                console.log('SUCCESS: just i have submited in header the user data ')
            } ,
            err => console.log(err)  )
      }


    /** RENDER the form */
    return( 
      <header className="nav_header_style">
          <Form onSubmit={handleSubmit}>
            <div className="nav_header_icon_container col">
                <i className="nav_header_icon"></i>
            </div>            
          </Form>
      </header>
    )
}



export default Header