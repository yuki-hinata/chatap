import React, {useState, useContext} from 'react'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import { Route,Redirect } from 'react-router-dom'

const Login = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = useContext(AuthContext)

    if(user){
        return<Redirect to='/' />
    }

    const handleSubmit = (e) =>{
        e.preventdefault()
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(()=>{
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    return(
    <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor='email'>E-Mail</label>
                <input 
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    //変わるごとにsetemailの引数に文字が入り、valueが更新される。
                    onChange={(e)=> setEmail(e.target.value)}
                    />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input 
                    type='password'
                    id='password'
                    name='password'
                    placeholder='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    />
            </div>
            <button type='submit'>Login</button>
        </form>
    </React.Fragment>
    )
}

export default Login