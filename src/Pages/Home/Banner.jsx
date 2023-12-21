

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/7C7n2Jf/Banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to the awesome blogs</h1>
                    <p className="mb-5 font-bold text-white">Reveal your creative side to the world and explore other blogs to experience awesomeness</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;