import React, {useState} from 'react'
import {DatePicker} from '@material-ui/pickers'
import {useForm, Controller} from 'react-hook-form'
import Button from '@material-ui/core/Button'
import {BtnDateFormat} from './components/Styled'

const Schedule = () => { 
    const city = localStorage.getItem("office")
    const [date, setDate] = useState(null)
    const {control, handleSubmit} = useForm();
    const submitData = (data) => {
        //console.log(data)
        console.log(date)
    }

    return (
        <div align="center" padding="30px">
            <h1>Escritório selecionado! Agora, selecione um dia.</h1>
            <form onSubmit={handleSubmit(submitData)}>
                <Controller defaultValue={date} name="scheduleDate" control={control} 
                render={({ field }) => (
                    <DatePicker 
                    value={date} 
                    onChange={setDate}   
                    autoOk 
                    inputVariant="outlined" 
                    variant="inlined" 
                    emptyLabel="Selecione a data"
                    format="dd MMMM yyyy" 
                    disablePast/>
                )}
                />
                <BtnDateFormat variant="contained" type="submit">OK</BtnDateFormat>
            </form>
        </div>
  )
}


export default Schedule