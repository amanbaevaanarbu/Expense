import './TodoListForm.css'
import { useState } from "react"
import Button from "./UI/Button"
import Input from "./UI/Input"
import ExpenseFilter from "./expenseFIlter/ExpenseFilter"

const TodoForm = () => {
    const [value, setValue] = useState('')
    const [state, setState] = useState('')
    const [items, setItems] = useState([])
    const [sort, setSort] = useState([])
    const[disabled,setDisabled] = useState(false)
    const valueChangeHandler = (e) => {
        setValue(e.target.value)
    }
    const textChangeHandler = (el) => {
        setState(el.target.value)

    }
    const submitHandler = (e) => {
        e.preventDefault()
        setItems((prevState) => {

            return [...prevState, { value, state, id: Math.random() }]

        })
        setState('')
        setValue('')
    }

    const Sortirovka = items.sort((a, b) => {

        if (sort === 'больше') {
            return b.state - a.state
        } else {
            return a.state - b.state
        }
    })

    console.log(sort);
    return (
        <div >
            <form onSubmit={submitHandler}>
                <div className='div-container'>
                    <Input value={value} onChange={valueChangeHandler} placeholder='name' />
                    <Input value={state} type="text" onChange={textChangeHandler} placeholder='age' />
                    <Button disabled={value&&state?false:true}>Add</Button>

                </div>


            </form>
            <ul>
                <ExpenseFilter onChange={(event) => setSort(event.target.value)} />


                {
                    Sortirovka.map((elem) => {
                        return (
                            <div key={elem.id} style={{ display: 'flex', justifyContent: 'center' }}>
                                <ul>{elem.value}</ul>
                                <ul>{elem.state}</ul>
                            </div>)



                    })

                }

            </ul>
        </div>
    )
}
export default TodoForm