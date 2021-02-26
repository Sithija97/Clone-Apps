import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'
import './Login.css'
function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error)=>{
            alert(error.message)
        })
         
    }
    return (
        <div className='login'>
            <div className="login_container">
                <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt=""/>
                <h1>Sign in to Slack here</h1>
                <p>www.cleverprogrammer.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}
export default Login;