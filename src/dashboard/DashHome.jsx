import useAuth from "../hooks/useAuth";


const DashHome = () => {
    const {user} = useAuth()
    return (
        <div>
            welcome back {user.displayName}
        </div>
    );
};

export default DashHome;