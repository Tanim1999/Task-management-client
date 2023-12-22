
import { useDrop } from "react-dnd";
import useFinished from "../hooks/useFinished";
import useOngoing from "../hooks/useOngoing";

import TaskCard from "./TaskCard";
import useToDo from "../hooks/useToDo";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const ToDoList = () => {
    const [todo,reTodo]= useToDo()
    const [ongoings,reOngoing] = useOngoing();
    const [finished,reFinished] = useFinished()
    const axiosPublic = useAxiosPublic()
    

    const addItemToDo = async (item) => {
        console.log('dropped item in to do', item);
        const { id, title, description,  deadLine, priority } = item
        const editedInfo = {
            title: title,
            description: description,
            priority: priority,
            deadLine: deadLine,
            
            status: "to-do"
        
        }
        const task = await axiosPublic.patch(`/tasks/${id}`, editedInfo);
        console.log(task.data)
        if (task.data.modifiedCount>0) {

            
            reTodo()
            reOngoing()
            reFinished()
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `status changed successfully.`,
                showConfirmButton: false,
                timer: 1500
            });

        }


    };
    const addItemToOngoing = async (item) => {
        console.log('dropped item in ongoing', item);
        const { id, title, description,  deadLine, priority } = item
        const editedInfo = {
            title: title,
            description: description,
            priority: priority,
            deadLine: deadLine,
            
            status: "ongoing"
        
        }
        const task = await axiosPublic.patch(`/tasks/${id}`, editedInfo);
        console.log(task.data)
        if (task.data.modifiedCount>0) {

            
            reOngoing()
            reTodo()
            reFinished()
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `status changed successfully.`,
                showConfirmButton: false,
                timer: 1500
            });

        }

    };
    const addItemToFinished = async(item) => {
        console.log('dropped item in finished', item);
        const { id, title, description,  deadLine, priority } = item
        const editedInfo = {
            title: title,
            description: description,
            priority: priority,
            deadLine: deadLine,
            
            status: "finished"
        
        }
        const task = await axiosPublic.patch(`/tasks/${id}`, editedInfo);
        console.log(task.data)
        if (task.data.modifiedCount>0) {

            
            reFinished()
            reTodo()
            reOngoing()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `status changed successfully.`,
                showConfirmButton: false,
                timer: 1500
            });

        }

    };
    
   
    const [{ isOver: isOverToDo }, dropToDo] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToDo(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const [{ isOver: isOverOngoing }, dropOngoing] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToOngoing(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const [{ isOver: isOverFinished }, dropFinished] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToFinished(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    console.log("is over in ToDoList?", isOverToDo, isOverOngoing, isOverFinished);

    return (
        <div className="flex w-full justify-center gap-5">
            <div ref={dropToDo} className="flex-1">
                <h2 className="font-bold text-3xl text-center my-5">
                    To-do
                </h2>
                <div>
                    {todo.map((task) => (
                        <TaskCard key={task._id} task={task}></TaskCard>
                    ))}
                </div>
            </div>
            <div ref={dropOngoing} className="flex-1">
                <h2 className="font-bold text-3xl text-center my-5">
                    On-going
                </h2>
                <div>
                    {ongoings.map((ongoing) => (
                        <TaskCard key={ongoing._id} task={ongoing}></TaskCard>
                    ))}
                </div>
            </div>
            <div ref={dropFinished} className="flex-1">
                <h2 className="font-bold text-3xl text-center my-5">
                    Finished
                </h2>
                <div>
                    {finished.map((finish) => (
                        <TaskCard key={finish._id} task={finish}></TaskCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
