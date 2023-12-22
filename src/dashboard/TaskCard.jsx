/* eslint-disable react/prop-types */

import { useDrag } from "react-dnd";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useToDo from "../hooks/useToDo";
import useOngoing from "../hooks/useOngoing";
import useFinished from "../hooks/useFinished";


const TaskCard = ({ task }) => {
    const [,reTodo]= useToDo()
    const [,reOngoing] = useOngoing();
    const [,reFinished] = useFinished()
    const axiosPublic = useAxiosPublic()
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

    const handleRemove=(id)=>{
        console.log("removing",id)
        Swal.fire({
            title: "Do you want to remove the task?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
  
                axiosPublic.delete(`/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            reTodo();
                            reOngoing();
                            reFinished();
                            Swal.fire({
                                title: "Removed!",
                                text: "Removed from the wishlist.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div ref={drag} className={` cursor-grab 
        ${isDragging? "opacity-25":"opacity-100"}
            
            `}>
            <div className="card mt-4 mx-auto w-60 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        
                        <Link to={`/dashBoard/editTask/${_id}`}><button className="btn btn-square btn-sm">
                            <FaEdit></FaEdit>
                        </button></Link>
                        <button className="btn btn-square btn-sm"
                         onClick={()=>handleRemove(_id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    <h2 className="card-title text-cyan-500">{title}</h2>

                    <p> {description}</p>
                    <span>DeadLine:{deadLine}</span>
                    <span><div className="badge badge-accent badge-outline">{priority}</div></span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;