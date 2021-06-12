import React,{useState, useEffect, useContext} from 'react'
import {AuthContext} from '../AuthService'
import firebase from '../config/firebase'
import Login from './Login'
import SignUp from './SignUp'

const Room = () => {
    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(()=>{
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setMessages(messages)
            })
    }, [])

    const user = useContext(AuthContext)

    const handleSubmit = () =>{
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName
        })
    }

    return(
        <React.Fragment>
            <h1>Room</h1>
            <ul>
                <li>
                    sample user : sample message
                </li>
            </ul>
            <form>
                <input 
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />
                    <button type='submit'>送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </React.Fragment>
    )
}

export default Room