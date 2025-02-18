import ToDo from './ToDo';

const ToDoList = ({to_dos}) => {
    return (
        <div className='to-do-list'>
            {
                to_dos.map((to_do) => {
                    return (
                        <ToDo key={to_do.id} to_do_name={to_do.name} />
                    )
                })
            }
        </div>
    )
}

export default ToDoList;