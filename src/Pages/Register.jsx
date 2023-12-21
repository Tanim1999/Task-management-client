

import { useForm } from "react-hook-form";


import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";


const Register = () => {
    const navigate = useNavigate()
    const axiosPublic= useAxiosPublic()

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    
    const { createUser, updateUserProfile } = useAuth()


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log("uploaded image", res.data.data.display_url
        )
        const photoURL = res.data.data.display_url
        const authResult = await createUser(data.email, data.password);
        const loggedUser = authResult.user;
        console.log("Logged user information", loggedUser);



        await updateUserProfile(data.name, photoURL);

        if (loggedUser.photoURL) {
            Swal.fire({
                title: 'Success!',
                text: 'Registered successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
            })
            reset()
            navigate("/")


        }
    }



    //  Creating user entry in the database







    return (



        <div className=" min-h-screen mx-auto">
            
            <div>
                <div className="hero bg-contain min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/52hD2fN/646413ce-ab1b-461d-a47d-81969323141b.jpg)' }}>
                    <div className="hero-content flex-col lg:flex-row">

                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="card flex-shrink-0 w-96 border-[2px] bg-black bg-opacity-40 shadow-none border-slate-500    ">
                                <div className="card-body">
                                    <h1 className="text-3xl text-center text-white font-bold">Register</h1>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Full Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" required />
                                        {errors.name && <span>This field is required</span>}

                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Profile picture</span>
                                        </label>
                                        <input type="file" {...register('image', { required: true })} placeholder="Profile picture" className="file-input file-input-bordered file-input-info w-full max-w-xs" required />
                                        {errors.name && <span>This field is required</span>}

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Email</span>
                                        </label>
                                        <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                                        {errors.email && <span className=" text-red-600">email is required</span>}

                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-bold">Password</span>
                                        </label>
                                        <input type="password" {...register("password", {
                                            required: true,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                            minLength: 6,
                                            maxLength: 20
                                        })} name='password' placeholder="password" className="input input-bordered" required />

                                        {errors.password?.type == 'minLength' && <span className="text-red-500 border-4 max-w-fit p-2 border-red-600 bg-white alert-error font-bold">Minimum password length is 6</span>}
                                        {errors.password?.type == 'maxLength' && <span className=" text-red-500 border-4 max-w-fit p-2 border-red-600 bg-white alert-error font-bold">Maximum password length is 20</span>}
                                        {errors.password?.type == 'pattern' && <span className="text-red-500 border-4 max-w-fit p-2 border-red-600 bg-white alert-error font-bold">Minimum 1 Uppercase,1 lower case, 1 special character,1 number needed</span>}

                                    </div>


                                    <div className="form-control mt-6">
                                        <button value=" login" type=' submit' className="btn text-white bg-black">Join</button>
                                    </div>
                                    <br />


                                </div>

                            </div>

                        </form>


                    </div>
                </div>
            </div>

        </div>

    );
};

export default Register;