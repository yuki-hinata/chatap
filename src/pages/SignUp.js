import React,{useState} from 'react'
import firebase from '../config/firebase'

const SignUp  = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(({user}) => {
                user.updateProfile({
                    displayName: name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='name'
                        id='name'
                        name='name'
                        placeholder='name'
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>

                <div>
                    <label htmlFor='email'>E-Mail</label>
                    <input 
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp