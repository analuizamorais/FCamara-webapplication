import React from 'react'
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

export default () => {

    const actionLoginGoogle = async () => {
        Api.googleLogin
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/register"> 
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"> <ArrowBackIosIcon /> </Link>
                            Crie sua conta</h1>

                            <form>
                            <div className="form--input">
                                <label>Nome</label>
                                <input type="text" />
                            </div>

                            <div className="form--input">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>

                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>Comece agora!</BtnDefault>

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
                        <BtnDefaultIcons>
                            <GitHubIcon />
                            <div className="center"> Fazer login com o GitHub </div>
                        </BtnDefaultIcons>
                        <BtnDefaultIcons onClick={actionLoginGoogle}>
                            <PermIdentityIcon />
                            <div className="center"> Fazer login com o Google </div>
                        </BtnDefaultIcons>

                        <p>ou</p>

                        <form>
                            <div className="form--input">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>

                            <div className="form--input">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>Entrar</BtnDefault>

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