import React, {useState} from 'react'
import {DatePicker, KeyboardDateTimePicker} from '@material-ui/pickers'
import {useForm, Controller} from 'react-hook-form'
import {BtnDateFormat} from '../../components/Styled'
import { useHistory } from 'react-router-dom';

const Schedule = () => { 
    const history = useHistory();

    const [date, setDate] = useState(null)
    const {control, handleSubmit} = useForm();

    const submitData = (data) => {
        localStorage.setItem("date", date);
        console.log(date)
        history.push('/confirmation');
    }

    //Não implementei devido a dificuldades e ao prazo, mas pensei na seguinte lógica para solucionar a problemática de lotação:
    //São Paulo, sob a possibilidade de apenas 40% de lotação, comporta 240 pessoas e Santos apenas 40 pessoas
    //No banco de dados haveriam tabelas, divididas pelas cidades, que constariam a data e um contador
    //Toda vez que um agendamento na cidade x fosse concluído, esse contador na data agendada é editado para uma unidade a mais.

    //E toda vez que um usuário vai selecionar uma data, é realizado o comparativo para averiguar se, no escritório escolhido, o limite
    //ainda não foi ultrapassado. Ou, melhor ainda, realizar esse comparativo previamente de modo que as datas lotadas fiquem desabilitadas

    function filterWeekends(date) {
        // Retorna false se for sábado ou domingo
        return date.getDay() === 0 || date.getDay() === 6;
      }

    return (
        <div align="center" padding="30px" width="90%">
            <label for="data"> <h1>Escritório selecionado! Agora, selecione um dia.</h1></label>
            <form onSubmit={handleSubmit(submitData)}>
                <div>
                    <Controller defaultValue={date} name="scheduleDate" control={control} 
                        render={({ field }) => (
                            <DatePicker 
                            id="data"
                            value={date} 
                            onChange={setDate}   
                            autoOk 
                            inputVariant="outlined" 
                            variant="dialog" 
                            emptyLabel="Selecione a data"
                            format="dd MM yyyy" //se der erro muda pra MMMM, igual tava antes
                            disablePast
                            shouldDisableDate={filterWeekends}
                            />
                        )}
                    />
                </div>
                <BtnDateFormat variant="contained" type="submit">OK</BtnDateFormat>
            </form>
        </div>
  )
}


export default Schedule