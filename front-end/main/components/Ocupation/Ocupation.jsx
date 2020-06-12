/** sltyle */
  import './Ocupation.css'
/** react and redux */
  import React,{useEffect} from 'react'
  import { Field , reduxForm, initialize , change } from 'redux-form'
  import {useDispatch} from 'react-redux'

/** container */
  import Container from '../../utils-components/Container.jsx'
/** service function creators */
  import { postUser, getUserData} from '../../services/user.js'


let FormOcupation = props => {
  
  const { handleSubmit } = props

  return(
    <Container
      containerClass="text-center"
      rowClass="justify-content-center">
      <form onSubmit={handleSubmit} className="h2 w-100">
          {/* the user will fill the ocupation  */}
          <Field 
              name="ocupation"
              component="input"
              type="text"
              className="ocupation_input_name  " 
              placeholder="seu cargo"/>
          <div className="ornament"></div>
      </form>
    </Container>
  )
}
FormOcupation = reduxForm({
    form: 'user_form',
    /** just submit the user after validation */
    
})(FormOcupation)

/**
 * @param {*}  espera receber o usuario como parametro
 */
const Ocupation = ({user}) => {


    let dispatch = useDispatch()
    /** a action creator of fill Fields fron api */
    let fillFieldsFronApi = (response) => dispatch(initialize(response))

  /** when user submit the form just validate and push */  
    const submitForm = (data) => {

    /** if user dont pass a regular value then 
     * RESET the value
     */
      
      if( !data.ocupation.trim() )
      {
        getUserData( 
          user._id, 
          response => dispatch(initialize('user_form',response)) ,
          err      => console.warn(err)   )
        
        alert('erro não foi possivel atualizar pois o campo está vazio')
        return 
      }

      /** if pass then submit to api */
      const onSubmited = res => console.log('SUCCESS: i have submited the user from ocupation',data,res)      
      const onError    = err => console.log('some error ocurred on ocupation: triying to push the user ocupation on api and get error',err)
      postUser( data , onSubmited , onError  )
    }

  return(<section>
      <FormOcupation onSubmit={submitForm} />
  </section>)
}

export default Ocupation