import { RiDeleteBin5Fill } from "react-icons/ri";

import { useState } from "react";

const ToDo = ({id, name, completed, updateCompletedToDo, deleteToDo}) => {

    const [isChecked, setIsChecked] = useState(completed);

    const handleCompleted = async () => {
        await updateCompletedToDo(id, !isChecked);
        setIsChecked(!isChecked);
    }

    const handleDelete = async () => {
        await deleteToDo(id);
    }

    return (
        <div className="to-do">
            <div className="to-do-container">
                <input type="checkbox" checked={isChecked} onChange={handleCompleted} />
                <h3>{name}</h3>
                <RiDeleteBin5Fill onClick={handleDelete} size='20px'/>
            </div>
        </div>
    );
}

export default ToDo;