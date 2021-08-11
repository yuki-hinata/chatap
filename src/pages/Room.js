import React,{useState, useEffect, useContext} from 'react'
import Item from '../pages/Item'
import {AuthContext} from '../AuthService'
import firebase from '../config/firebase'

const Room = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')

    useEffect(()=>{
        firebase.firestore().collection('messages')
          .orderBy('time', 'asc').onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return (doc.data()
                    )
                })
                setMessages(messages)
            })
    }, [])

    const user = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setValue('')
        firebase.firestore().collection('messages').add({
            time: firebase.firestore.FieldValue.serverTimestamp(),
            content: value,
            user: user.displayName
        })
    }

    return(
        <React.Fragment>
            <h1>Room</h1>
            <ul>
                
                   {messages.map((message,index)=>{
                       return(
                          <Item content={message.content} user={message.user} key={index}/>
                       )
                   })}
                
            </ul>
            
            <form onSubmit={handleSubmit}>
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