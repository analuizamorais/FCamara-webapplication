import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { BtnOffice, AreaOffice } from './components/Styled'
//import styled from 'styled-components'

const Office = () => {
    //const [isOfficeSelected, setOfficeSelected] = useState(false);
    const history = useHistory();
    localStorage.clear();

    function renderAquilo(office){
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
                        <BtnOffice onClick={() => renderAquilo("São Paulo")}>São Paulo </BtnOffice>
                    </p>
                <BtnOffice onClick={() => renderAquilo("Santos")}>Santos</BtnOffice>
            </AreaOffice>
        </div>
  )
}


export default Office