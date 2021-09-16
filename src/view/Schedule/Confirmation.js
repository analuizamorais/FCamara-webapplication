import React from 'react'
import { BtnOffice, AreaOffice } from '../../components/Styled'

const Confirmation = () => { 
    const city = localStorage.getItem("office")
    const date = localStorage.getItem("date")
    const sort = localStorage.getItem("sort")

    return (
        <AreaOffice>
            <h1>Dia confirmado! Vamos revisar os detalhes?</h1>
            <h3>Dê uma última olhada antes de finalizar o seu agendamento.</h3>
            <h4>
                <p>Tipo: {sort}</p>
                <p>Escritório: {city}</p>
                <p> Data: {date}</p>

                <p> Deseja adicionar alguma descrição?</p>
            </h4>
            <BtnOffice>Concluir</BtnOffice>
        </AreaOffice>
  )
}


export default Confirmation