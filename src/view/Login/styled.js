import styled from 'styled-components'

export const AreaLogin = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;  
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;

    h1{
        font-size: 24px;
        margin-bottom: 25px;
    }

    .organize {
        display: flex;

        a {
            color: #ef653c;
        }
    }

    .form--input{
        text-align: left;

        label{
            display: block;
        }

        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;

            &:hover{
                border: 1px solid #ef653c;
            }
        }
    }

    .footerLogin {
        font-size: 13px;

        a {
            font-weight: bold;
            margin-left: 5px;
            color: #ef653c;
            transition: 0.4s;
            cursor: pointer;

            &:hover{
                color: #ff4500;
            }
        }
}
`
