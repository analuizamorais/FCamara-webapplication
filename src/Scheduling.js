import React, {useState} from 'react'
import {DatePicker} from '@material-ui/pickers'
import {useForm, Controller} from 'react-hook-form'
import Button from '@material-ui/core/Button'

const Schedule = () => { 
    const city = localStorage.getItem("office")
    const [date, setDate] = useState(null)
    const {control, handleSubmit} = useForm();
    const submitData = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h1>AAAAAAAAAAAAAAAA {city}</h1>
            <h2> escolha a data</h2>
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
                <Button variant="contained" type="submit">OK</Button>
            </form>
        </div>
  )
}


export default Schedule