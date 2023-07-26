import { useState } from "react"

export default function Form({getData}) {

    const [input, setInput]=useState('');

    function handleChange(evt){
        setInput(evt.target.value)
    }

    function handleSubmit(evt){
        evt.preventDefault()
        getData(input)
    }

    return(
    <div className="form">
        <h1 className="title">Movie API</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter Movie" type="text" value={input} onChange={handleChange}/>
            <button>submit</button>
        </form>
        
    </div>
    )
}