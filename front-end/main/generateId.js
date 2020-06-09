import { postUser, getUserData } from './services/user'

/** GENERATE ID FOR NEW USER or use the id in local storage */
const generateId = (setUser,clearId) => {
      
    /** user can have an _id in memory */
    let user_id = localStorage.getItem('_id')
    console.log( 'loop user id', user_id) 
    
    /** in case that user dont have your id,
     * you need to create a user and get it's _id
     * and register in memory */
    if(  !user_id  ){
      
      postUser({_id:null}, user => {
        localStorage.setItem('_id',user._id)
        console.log('_id é setado:',user._id)
        setUser({_id:user._id})
      })
      
       console.log('LOOP DO UNDEFINED')
    }
    /** in case that user have you key 
     * i need to check if this key is valid */

    else if(  user_id  ) { /** I SHOUD REFACTOR THIS */
        
        /** if is valid */
        console.log('LOOP DO USUARIO SETADO NO LOCAL STORAGE')

        getUserData(user_id, 
          user => { 
            localStorage.setItem('_id',user._id)
            setUser(user)
          },
          err => {
            clearId()
            console.log('LOOP ERRO USUARIO NÃO ENCONTRADO')
        })
        
        /** if is not valid */

        /** it would be a silly internet error and maybe user key is valid */
    }
}
export default generateId