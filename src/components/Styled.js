import styled from 'styled-components'

export const BtnDefaultIcons = styled.button`

    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;

    &:hover { 
        background-color: #ccc;
    }

    .center{
        text-align: center;
        width: 100%;
    }
`

export const BtnDefault = styled(BtnDefaultIcons)`
    background-color: #ef653c;
    color: #fff;
    display: inline;

    &:hover { 
        background-color: #ff4500;
    }
`