import { useState } from "react"
import Button from "./UI/Button"
import Input from "./UI/Input"

const TodoForm = () => {
    const [value, setValue] = useState('')
    const [date, setDate] = useState('')
    const [items, setItems] = useState([])
    const valueChangeHandler = (e) => {
        setValue(e.target.value)
    }
    const dateChangeHandler = (el) => {
        setDate(el.target.value)
        console.log(date);
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setItems((prevState) => {
            return [...prevState, { value, date, id: Math.random() }]

        })
    }
    return (
        <div>
            <form onSubmit={submitHandler}>

                <Input onChange={valueChangeHandler} />
                <Input type="date" onChange={dateChangeHandler} />
                <Button>Add</Button>


            </form>
            <ul>

                {
                    items.map((elem) => {
                        return ( //<li key={elem.id}>{elem.value}  {elem.date} </li>
                            <div key={elem.id} style={{display:'flex', justifyContent:'center'}}>
                        <ul>{elem.value}</ul>
                        <ul>{elem.date}</ul>
                        </div>)
                            
                        

                    })

                }
            </ul>
        </div>
    )
}
export default TodoForm