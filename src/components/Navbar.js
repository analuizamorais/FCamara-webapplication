import React, { useState } from 'react'
import styled from 'styled-components'

function Navbar(props){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo href="" alt="logo da fcamara">
                <img src="https://brasscom.org.br/wp-content/uploads/2020/05/Logotipo-FCamara.png" alt="grupo fcamara" width="70px" height="auto"/>
            </Logo>
            <Hamburguer onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburguer>
            <Menu isOpen={isOpen}>
                <MenuLink href="">            
                    <div className="avatar" >
                        <img src={props.user.avatar} alt="foto do usuário logado" />
                            <label>{props.user.name}</label>
                    </div>
                </MenuLink>
                <MenuLink href="/">Dashboard</MenuLink>
                <MenuLink href=""> Logout </MenuLink>
            </Menu>
        </Nav>
  )
}

//estilização do menú 

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;

    .avatar {
        display: flex;
        align-items: center;

        img {
            width: 35px;
            border-radius: 20px;
            margin-left: 20px;
            margin-right: 10px;
            cursor: pointer;

        }

        label {
            font-size: 14px;
            cursor: pointer;
            color: #ef653c;

            @media screen and (max-width: 600px) {
                label {
                    display: none;
                }
            }
        }
    }
`

const Logo = styled.a`
    padding: 1rem 0;

`

const Hamburguer = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #000000;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`
const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #36357e;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    &:hover {
        color: #000000;
    }
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
    }
`

export default Navbar