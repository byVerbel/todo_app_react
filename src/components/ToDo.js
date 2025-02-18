import { RiDeleteBin5Fill } from "react-icons/ri";

const ToDo = ({name}) => {
    return (
        <div className="to-do">
            <div className="to-do-container">
                <input type="checkbox" />
                <h3>{name}</h3>
                <RiDeleteBin5Fill size='20px'/>
            </div>
        </div>
    );
}

export default ToDo;