
const AddToDo = ({addToDo}) => {

    return (
        <div className="add-to-do">
            <input className="add-to-do-input" type="text" />
            <button className='add-to-do-button' onClick={addToDo}>Add ToDo</button>
        </div>
    )
}

export default AddToDo;