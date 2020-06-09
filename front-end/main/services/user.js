import axios from 'axios'
import env from './../../../env.js'


/** just url base with http */
const url_base = `http://${env.BACKEND_HOST}:${env.BACKEND_PORT}`





/** pass a user object and create or update
 * if you pass a withou _id then it will create a user for you
 */
export const postUser = ( user = {_id:false} , callback , error = () => {} ) => { 


    let method = user._id ? 'put' : 'post'

    console.log(`[${method}] user to: `,user)

    axios[method](
      `${url_base}/api/personal-data/${method === 'put' ? user._id : ''}`,
           user._id ? user : {} )
          .then( res => {
              callback(res.data)
          }).catch( err => {
              error(err)
          })

}

/** fetch users and call callback or show error */
export const getUsersData = (callback , error = () => {} ) => {

    axios.get(`${url_base}/api/personal-data`)
        .then( res => {
            callback(res.data)
        })
        .catch( err => {
            error(err)           
        })
}
/** get one user by id and when it is done do callback
 * or when it fails throw error
 */
export const getUserData = ( _id , callback , error = () => {} ) => {

    if( !_id ){
        error('Id Não definido!')
        return 
    }

    axios.get(`${url_base}/api/personal-data/${_id}`)
        .then ( res => {
            callback(res.data)
        })
        .catch( err => {
            error(err)
        })
}