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

    function filterWeekends(date) {
        // Retorna false se for sábado ou domingo
        return date.getDay() === 0 || date.getDay() === 6;
      }

    return (
        <div align="center" padding="30px" width="90%">
            <h1>Escritório selecionado! Agora, selecione um dia.</h1>
            <form onSubmit={handleSubmit(submitData)}>
                <div>
                    <Controller defaultValue={date} name="scheduleDate" control={control} 
                        render={({ field }) => (
                            <DatePicker 
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