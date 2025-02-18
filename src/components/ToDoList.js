import ToDo from './ToDo';

const ToDoList = ({to_dos, deleteToDo}) => {
    return (
        <div className='to-do-list'>
            {
                to_dos.map((to_do) => {
                    return (
                        <ToDo id={to_do.id} name={to_do.name} deleteToDo={deleteToDo} />
                    )
                })
            }
        </div>
    )
}

export default ToDoList;