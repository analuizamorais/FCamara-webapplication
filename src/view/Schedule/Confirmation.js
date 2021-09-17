import React, {useState} from 'react'
import { BtnOffice, AreaOffice } from '../../components/Styled'
import { useHistory } from 'react-router-dom';

import 'firebase/compat/database'
import firebaseConfig from '../../firebaseConfig'
import firebase from 'firebase/compat/app'
const firebaseApp = firebase.initializeApp(firebaseConfig) 

const Confirmation = () => { 

    const history = useHistory();

    //Coleta os dados passados pelo localStorage durante a utilização da aplicação
    const city = localStorage.getItem("office")
    const date = localStorage.getItem("date")
    const sort = localStorage.getItem("sort")
    const email = localStorage.getItem("email")

    //Coloca a descrição em uma variável
    const [description, setDescription] = useState('Sem descrição')
    const handleOnChangeDescription = (a) => {
        setDescription(a.target.value)
    }

    //Registra o novo agendamento no banco de dados
    const createSchedule = () => {
        const scheduleRef = firebase.database().ref('Schedule')
        const schedule = {
            email,
            city,
            date,
            sort, 
            description
        }
        scheduleRef.push(schedule)
        history.push('/myschedules')
    }
    return (
        <AreaOffice>
            <h1>Dia confirmado! Vamos revisar os detalhes?</h1>
            <h3>Dê uma última olhada antes de finalizar o seu agendamento.</h3>
            <h4>
                <p>Tipo: {sort}</p>
                <p>Escritório: {city}</p>
                <p> Data: {date}</p>

                <label for="descrição"><p> Deseja adicionar alguma descrição?</p></label>
                <textarea
                    id="descrição"
                    aria-label="empty textarea"
                    placeholder="Descrição do agendamento."
                    value={description}
                    onChange={handleOnChangeDescription}
                    style={{ width: 200 }}
                />
            </h4>
            <BtnOffice onClick={createSchedule}>Concluir</BtnOffice>
        </AreaOffice>
  )
}


export default Confirmation