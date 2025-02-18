import { RiDeleteBin5Fill } from "react-icons/ri";

const ToDo = ({to_do_name}) => {
    return (
        <div className="to-do">
            <div className="to-do-container">
                <input type="checkbox" />
                <h3>{to_do_name}</h3>
                <RiDeleteBin5Fill size='20px'/>
            </div>
        </div>
    );
}

export default ToDo;