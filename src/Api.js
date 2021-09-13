import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { GithubAuthProvider } from "firebase/auth";

import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig) 
const db = firebaseApp.firestore()

export default {

    googleLogin: async () => {
        const providerGoogle = new firebase.auth.GoogleAuthProvider()
        let result = await firebase.auth().signInWithPopup(providerGoogle)

        return result
    },
    gitHubLogin: async () => {
        const providerGitHub = new GithubAuthProvider()
        let result = await firebase.auth().signInWithPopup(providerGitHub)

        return result
    }
}
