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
export const BtnOffice = styled(BtnDefaultIcons)`
    background-color: #eff0f6;
    color: #000000;
    display: inline;
    width: 300px;
    height: 80px;
    margin: 30px auto;
    align-items: center;
    padding: 10px;
    margin-bottom: 15px;
`

export const AreaOffice = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;  
    text-align: center;
    border-radius: 5px;
`

export const BtnDateFormat = styled.button`

    display: flex;
    align-items: center;
    padding: 10px;
    width: 50px;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;
    height: 50px;

    &:hover { 
        background-color: #ccc;
    }

    .center{
        text-align: center;
        width: 100%;
    }
`