import ToDo from './ToDo';

const ToDoList = () => {
    return (
        <div className='to-do-list'>
            <ToDo to_do_list='ToDo 1'/>
            <ToDo to_do_list='ToDo 2'/>
            <ToDo to_do_list='ToDo 3'/>
        </div>
    )
}

export default ToDoList;