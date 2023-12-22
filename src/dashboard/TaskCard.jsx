/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const TaskCard = ({ task }) => {
    
    const { _id, title, description, status, deadLine, priority } = task
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item:{id:_id,
              title:title,
              description:description,
              status:status,
              deadLine:deadLine,
              priority:priority
        
        
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    console.log(isDragging)
    
    console.log(status, deadLine, priority)
    return (
        <div ref={drag} className={` cursor-grab 
        ${isDragging? "opacity-25":"opacity-100"}
            
            `}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <Link to={`/dashBoard/editTask/${_id}`}><button className="btn btn-square btn-sm">
                            <FaEdit></FaEdit>
                        </button></Link>
                        <button className="btn btn-square btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <h2 className="card-title">{title}</h2>

                    <p> {description}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;