import useFinished from "../hooks/useFinished";
import useOngoing from "../hooks/useOngoing";
import useTasks from "../hooks/useTasks";
import TaskCard from "./TaskCard";


const ToDoList = () => {
    const [tasks] = useTasks()
    const [ongoings] = useOngoing()
    const [finished]= useFinished()
    return (
        <div className="flex w-full justify-center gap-5">
            <div className="flex-1">
                <h2 className="font-bold text-3xl text-center my-5">
                    To-do
                </h2>
                <div>
                    {tasks.map((task) => (
                        <TaskCard key={task._id} task={task}></TaskCard>
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <h2 className="font-bold text-3xl text-center my-5">
                    On-going
                </h2>
                <div>
                    {ongoings.map((ongoing) => (
                        <TaskCard key={ongoing._id} task={ongoing}></TaskCard>
                    ))}
                </div>
            </div>
            <div className="flex-1">
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