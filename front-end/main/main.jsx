/** import react and react-redux */
    import React,{useState,useEffect} from 'react'
    import {useSelector} from 'react-redux'

/** import dependencies */
    import popper from 'popper.js'
    import jQuery from 'jquery'
    import bootstrap from 'bootstrap'
    window.$ = window.jQuery = jQuery
    
/** import css */
    import './../node_modules/bootstrap/dist/css/bootstrap.css'

/** import components */
    import Header from './components/Header.jsx'
    import { postUser, getUserData } from './services/user'
    import generateId from './generateId'


export default props => {

    let [user,setUser] = useState({_id:null})
    
    /** JUST CLEAN */
      const clearId = _ => {
        localStorage.removeItem ('_id')
        setUser({_id:null})
      }


    /** IT IS JUST A COMPONENT DID MOUNT because the observation of user._id */
    useEffect( _ => {
      /** just generate id in local storage when user dont have one */
      generateId(setUser,clearId)
      
    } , [user._id] )


    return(
      <div>
        <Header user={user} />                
      </div>)
}