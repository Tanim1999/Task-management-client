import useAuth from "../hooks/useAuth";
import ToDoList from "./toDoList";


const DashHome = () => {
    const {user} = useAuth()
    return (
        <div className="w-full ">
            welcome back {user?.displayName}

            <ToDoList></ToDoList>
        </div>
    );
};

export default DashHome;