import React from 'react'
import { useHistory } from 'react-router-dom';
import { BtnOffice, AreaOffice } from '../../components/Styled'

const Office = () => {
    const history = useHistory();

    function setCity(office){
        localStorage.setItem("office", office);
        history.push('/schedule');
    }
    
    return (
        <div align="center" padding="30px">
            <h1> Vamos agendar a sua próxima ida ao escritório! </h1>
            <p> </p>   
            <h3>Para começar, por gentileza, escolha em qual escritório você deseja ir.</h3>
            <AreaOffice>
                    <p>
                        <BtnOffice onClick={() => setCity("São Paulo")}>São Paulo </BtnOffice>
                    </p>
                <BtnOffice onClick={() => setCity("Santos")}>Santos</BtnOffice>
            </AreaOffice>
        </div>
  )
}


export default Office