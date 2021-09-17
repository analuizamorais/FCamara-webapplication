import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { BtnDefault } from '../../components/Styled'
import { BtnOffice, AreaOffice } from '../../components/Styled'

import 'firebase/compat/database'
import firebaseConfig from '../../firebaseConfig'
import firebase from 'firebase/compat/app'
const firebaseApp = firebase.initializeApp(firebaseConfig) 

const MySchedules = () => {
    const history = useHistory();
   const [scheduleList, setScheduleList] = useState()

    //Puxa do banco de dados os agendamentos registrados
    //Não tive tempo de implementar, mas iria colocar um filtro para que só fossem exibidos aqueles que tivessem 
    //o mesmo email do usuário logado
    useEffect(() => {
        const scheduleRef = firebase.database().ref('Schedule')
        scheduleRef.on('value', (snapshot) => {
            console.log(snapshot.val())
             const schedule = snapshot.val()
             const scheduleList = [];
             scheduleList.push(schedule[1])
                for (let id in schedule){
                  scheduleList.push(schedule[1])
                 
                  console.log(scheduleList.push(schedule))
                } 
        })
    }, [])

    
    
    return (
        <div align="center" padding="30px">
            <h1> Olá, Sangue Laranja! </h1>   
            <h3>Aqui você pode dar uma olhada nos seus agendamentos mensais!</h3>
            <AreaOffice>
            {scheduleList ? scheduleList.map((schedule) => <h3>  - {schedule.sort}, Quando? {schedule.date}, Local: {schedule.city}, {schedule.description}  </h3>) : 'Você ainda não tem nenhum agendamento.'}
            <BtnDefault onClick={() => history.push('/sort')}>Agendar agora</BtnDefault>
            </AreaOffice> 
        </div>
  )
}


export default MySchedules