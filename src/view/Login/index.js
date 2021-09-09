import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { AreaLogin } from './styled'
import { BtnDefaultIcons, BtnDefault } from '../../components/Styled'
import GitHubIcon from '@material-ui/icons/GitHub';
//import GoogleIcon from '@mui/icons-material/Google'; icon indiponível no material-ui e até mesmo nos icons da google
//<GoogleIcon />
//então vamos utilizar esse:
import PermIdentityIcon from '@material-ui/icons/PermIdentity'

export default () => {
    return (
        <BrowserRouter>
            <AreaLogin>
                <h1>Faça login em sua conta</h1>
                <BtnDefaultIcons>
                    <GitHubIcon />
                    <div className="center"> Fazer login com o GitHub </div>
                </BtnDefaultIcons>
                <BtnDefaultIcons>
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
        </BrowserRouter>
    )
}