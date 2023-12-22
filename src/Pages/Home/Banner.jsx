/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/7C7n2Jf/Banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to the TaskSwift</h1>
                    <p className="mb-5 font-bold text-white">Easily manage your tasks and enhance your productivity</p>
                    <Link to="/logIn"><button className="btn bg-black text-white">Let's Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;