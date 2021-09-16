import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { BtnOffice, AreaOffice } from '../../components/Styled'

const Sort = () => {
    const history = useHistory();
    localStorage.clear();

    function setSort(sort){
        localStorage.setItem("sort", sort);
        history.push('/office');
    }
    
    return (
        <div align="center" padding="30px">
            <h1> Qual tipo de agendamento você quer fazer? </h1>  
            <AreaOffice>
                    <p>
                        <BtnOffice onClick={() => setSort("Visita")}>Visita </BtnOffice>
                    </p>
                <BtnOffice onClick={() => setSort("Reunião")}>Reunião</BtnOffice>
            </AreaOffice>
        </div>
  )
}


export default Sort