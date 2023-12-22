import useAuth from "../hooks/useAuth";
import ToDoList from "./toDoList";

import { MdOutlineEmojiEmotions } from "react-icons/md"


const DashHome = () => {
    const { user } = useAuth()
    return (
        <div className="w-[90%] mx-auto  ">
            <div className="flex mt-5 items-center justify-start gap-3 ">
                <h2 className="text-4xl   w-fit text-cyan-500 font-bold">
                    welcome back {user?.displayName}
                    

                </h2>
                <p className="text-4xl flex-1  w-full text-cyan-500 font-bold"><MdOutlineEmojiEmotions />
</p>
            </div>


            <ToDoList></ToDoList>
        </div>
    );
};

export default DashHome;