import useAuth from "../hooks/useAuth";
import ToDoList from "./toDoList";

import { MdOutlineEmojiEmotions } from "react-icons/md"


const DashHome = () => {
    const { user } = useAuth()
    return (
        <div className="w-full  ">
            <div className="flex mt-5 items-center justify-start ">
                <h2 className="text-3xl  w-full text-cyan-500 font-bold">
                    welcome back {user?.displayName}
                    

                </h2>
                <p className="text-3xl  w-full text-cyan-500 font-bold"><MdOutlineEmojiEmotions />
</p>
            </div>


            <ToDoList></ToDoList>
        </div>
    );
};

export default DashHome;