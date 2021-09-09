import React from 'react'
import { useHistory } from 'react-router-dom';
//import styled from 'styled-components'

const Office = () => {
    //const [isOfficeSelected, setOfficeSelected] = useState(false);
    const history = useHistory();

    function renderAquilo(office){
        localStorage.setItem("office", office);
        history.push('/schedule');
        console.log(`cheguei no render ${office}`)
        return (
            <div>
                <h1>DEU CERTO</h1>
            </div>
        )
    }
    
    return (
        <div>
            <h1>Para qual escritório você quer realizar o agendamento?</h1>
            <button onClick={() => renderAquilo("Sampa")}>São Paulo</button>
            <button onClick={() => renderAquilo("Santos")}>Santos</button>
        </div>
  )
}


export default Office