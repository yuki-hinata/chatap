import firebase from 'firebase/app'
import 'firebase/firestore'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDEnXnZrt025nhWpiNQP1th8levX9rdQkQ",
    authDomain: "chat-app2-bb19a.firebaseapp.com",
    projectId: "chat-app2-bb19a",
    storageBucket: "chat-app2-bb19a.appspot.com",
    messagingSenderId: "671906755445",
    appId: "1:671906755445:web:e8ce9dfa607d5ee41dd93c"
}

firebase.initializeApp(firebaseConfig)

export default firebase