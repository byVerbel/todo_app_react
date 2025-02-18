import { useState } from 'react';

const AddToDo = ({addToDo}) => {

    const [input, setInput] = useState('');

    const handleAdd = () => {
        addToDo(input);
        setInput('');
    }

    return (
        <div className="add-to-do">
            <input onChange={(e) => setInput(e.target.value)} className="add-to-do-input" type="text" />
            <button onClick={handleAdd} className='add-to-do-button'>Add ToDo</button>
        </div>
    )
}

export default AddToDo;