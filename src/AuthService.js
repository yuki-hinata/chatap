import React , {useState, useEffect} from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext()


const AuthProvider = ({children}) =>{
    //('')だと更新する度空の文字が入るので、nullになっている。
    const [user, setUser] = useState(null)
    console.log(user)
    //現在ログインしているユーザーを取得。
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    },[])

    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}
