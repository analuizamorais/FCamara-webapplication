import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { AreaLogin } from './styled'
import { BtnDefaultIcons, BtnDefault } from '../../components/Styled'
import GitHubIcon from '@material-ui/icons/GitHub';
//import GoogleIcon from '@mui/icons-material/Google'; icon indiponível no material-ui e até mesmo nos icons da google
//<GoogleIcon />
//então vamos utilizar esse:
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import Api from '../../Api'
import 'firebase/compat/database'
import firebaseConfig from '../../firebaseConfig'
import firebase from 'firebase/compat/app'
const firebaseApp = firebase.initializeApp(firebaseConfig) 

export default ({onReceive}) => {
  
    // function signIn(){
    //     const { email, password } = this.state;
    //     console.log(this.state)
    //     let result = firebase.auth().signInWithEmailAndPassword(email, password)
    //     if(result){
    //         onReceive(result.user)
    //     }else {
    //         alert("Error")
    //     }
    // }

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogin()

        if(result){
            onReceive(result.user)
        }else {
            alert("Error")
        }
    }

     const teste = async () => {
        Api.teste()
     }
    const actionLoginGitHub = async () => {
        let result = await Api.gitHubLogin()

        if(result){
            onReceive(result.user)
        }else {
            alert("Error")
        }
    }

    const [name, setName] = useState('')
    const handleOnChangeRegisterName = (a) => {
        setName(a.target.value)
    }

    const [email, setEmail] = useState('')
    const handleOnChangeRegisterEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState('')
    const handleOnChangeRegisterPassword = (i) => {
        setPassword(i.target.value)
    }

     const createUser = () => {
         console.log("bbb")
         const userRef = firebase.database().ref('User')
         console.log("aaaa")
         console.log(email)
         console.log(password)
         console.log(name)
         const userEmailLogin = {
             name,
             email,
             password
         }
         console.log(userEmailLogin)
         userRef.push(userEmailLogin)
     }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/register"> 
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"> <ArrowBackIosIcon /> </Link>
                            Crie sua conta
                        </h1>

                        <form>
                            <div className="form--input">
                                <label>Nome</label>
                                <input type="text" onChange={handleOnChangeRegisterName} value={name}/>
                            </div>

                            <div className="form--input">
                                <label>E-mail</label>
                                <input type="email" onChange={handleOnChangeRegisterEmail} value={email}/>
                            </div>

                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password" onChange={handleOnChangeRegisterPassword} value={password}/>
                            </div>

                            <BtnDefault type="submit" onClick={createUser} >Comece agora!</BtnDefault>

                            <div className="footerLogin"> 
                                Já tem uma conta? 
                                <Link to="/">Faça login</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
                <Route exact path="*">
                    <AreaLogin>
                        <h1>Faça login em sua conta</h1>
                        <BtnDefaultIcons onClick={actionLoginGitHub}>
                            <GitHubIcon />
                            <div className="center"> Fazer login com o GitHub </div>
                        </BtnDefaultIcons>
                        <BtnDefaultIcons onClick={actionLoginGoogle}>
                            <PermIdentityIcon />
                            <div className="center"> Fazer login com o Google </div>
                        </BtnDefaultIcons>

                        <p>ou</p>

                        <form id="authEmailPassword">
                            <div className="form--input">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>

                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault >Entrar</BtnDefault>

                            <div className="footerLogin"> 
                                Não tem uma conta? 
                                <Link to="/register">Registre-se</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}