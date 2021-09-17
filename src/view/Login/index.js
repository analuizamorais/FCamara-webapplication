import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { AreaLogin, Nav, Logo } from './styled'
import { BtnDefaultIcons, BtnDefault } from '../../components/Styled'
import GitHubIcon from '@material-ui/icons/GitHub';
//import GoogleIcon from '@mui/icons-material/Google'; icon indiponível no material-ui e até mesmo nos icons da google
//<GoogleIcon />
//então vamos utilizar esse:
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

import Api from '../../Api'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import firebaseConfig from '../../firebaseConfig'
import firebase from 'firebase/compat/app'
const firebaseApp = firebase.initializeApp(firebaseConfig) 

export default ({onReceive}) => {
  
    //Verificação para logar via email e senha
     function signIn(){
         let result = firebase.auth().signInWithEmailAndPassword(email, password)
         if(result){
             onReceive(result.user)
         }else {
             alert("Error")
         }
     }

    //Chama a API para logar através do Google
    const actionLoginGoogle = async () => {
        let result = await Api.googleLogin()

        if(result){
            onReceive(result.user)
        }else {
            alert("Error")
        }
    }

    //Chama a API para logar através do GitHub
    const actionLoginGitHub = async () => {
        let result = await Api.gitHubLogin()

        if(result){
            onReceive(result.user)
        }else {
            alert("Error")
        }
    }

    //Para atribuir os valores do formulário às variáveis conforme elessão alterados
    const [name, setName] = useState('')
    const handleOnChangeName = (a) => {
        setName(a.target.value)
    }

    const [email, setEmail] = useState('')
    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState('')
    const handleOnChangePassword = (i) => {
        setPassword(i.target.value)
    }

    //Registra o novo usuário no banco de dados
     const createUser = () => {
         const userRef = firebase.database().ref('User')
         const userEmailLogin = {
             name,
             email,
             password
         }
         userRef.push(userEmailLogin)
     }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/register"> 
                    <Nav>
                        <Logo href="">
                            <img src="https://brasscom.org.br/wp-content/uploads/2020/05/Logotipo-FCamara.png" alt="grupo fcamara" width="70px" height="auto"/>
                        </Logo>
                    </Nav>
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"> <ArrowBackIosIcon /> </Link>
                            Crie sua conta
                        </h1>

                        <form>
                            <div className="form--input">
                                <label for="nome">Nome</label>
                                <input type="text" id="nome" name="nome" onChange={handleOnChangeName} value={name}/>
                            </div>

                            <div className="form--input">
                                <label for="email">E-mail</label>
                                <input type="email" id="email" name="email"  onChange={handleOnChangeEmail} value={email}/>
                            </div>

                            <div className="form--input">
                                <label for="senha">Senha</label>
                                <input type="password" id="senha" name="senha"  onChange={handleOnChangePassword} value={password}/>
                            </div>

                            <BtnDefault type="submit" onClick={createUser}> Comece agora! </BtnDefault>

                            <div className="footerLogin"> 
                                Já tem uma conta? 
                                <Link to="/">Faça login</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
                <Route exact path="*">
                    <Nav>
                        <Logo href="">
                            <img src="https://brasscom.org.br/wp-content/uploads/2020/05/Logotipo-FCamara.png" alt="grupo fcamara" width="70px" height="auto"/>
                        </Logo>
                    </Nav>
                    <AreaLogin>
                        <h1>Olá, Sangue Laranja!</h1>
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
                                <label for="email">E-mail</label>
                                <input type="email" id="email" name="email"  onChange={handleOnChangeEmail}/>
                            </div>

                            <div className="form--input">
                                <label for="senha">Senha</label>
                                <input type="password" id="senha" name="senha" onChange={handleOnChangePassword}/>
                            </div>

                            <BtnDefault onClick={signIn}>Entrar</BtnDefault>

                            <div className="footerLogin"> 
                                Ainda não tem uma conta? 
                                <p><Link to="/register">Cadastre-se</Link></p>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}