import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";

const DashBoard = () => {
    const { logOut,user } = useAuth()
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions =
        <>
            <li> <NavLink to="/dashBoard/dashHome"> My Tasks</NavLink> </li>
            <li> <NavLink to="/dashBoard/createTask"> Create a task</NavLink> </li>
            <li>
                    <button onClick={handleLogout} className="btn mt-10 text-white bg-black">Logout</button>

                </li>
        </>


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary bg-[#175f82] drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-cyan-500 font-bold uppercase  text-white">
                  
                    <div className="flex items-center gap-3 my-5" >

                        <div className="mask mask-squircle w-12 h-12">
                            {user?.photoURL ? <><img src={user.photoURL} /></>
                                :
                                <>
                                    <div className="mask mask-squircle w-12 h-12 text-2xl text-center">
                                        <FaUser className="w-full h-full"></FaUser>
                                    </div>
                                </>}
                        </div>
                        <div className="font-bold">{user?.displayName}</div>
                    </div>
                    {navOptions}

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;