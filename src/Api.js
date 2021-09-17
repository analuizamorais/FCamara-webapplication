import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import { GithubAuthProvider } from "firebase/auth";
//import 'firebase/database'

import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig) 
//const db = firebaseApp.firestore()

export default {

    //Realiza a verificação pelas aplicações (Google e GitHub) em um pop-up

    googleLogin: async () => {
        const providerGoogle = new firebase.auth.GoogleAuthProvider()
        let result = await firebase.auth().signInWithPopup(providerGoogle)

        return result
    },
    gitHubLogin: async () => {
        const providerGitHub = new GithubAuthProvider()
        let result = await firebase.auth().signInWithPopup(providerGitHub)
        console.log(result)
        return result
    }
}
