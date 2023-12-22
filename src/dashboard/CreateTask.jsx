
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";


const CreateTask = () => {
   
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const {
        register,
        reset,

        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        
        

        const uploadInfo = {
            title: data.title,
            description: data.description,
            priority: data.priority,
            deadLine: data.deadLine,
            user: user.uid,
            creationDate: new Date().toISOString(),
            email: user.email,
            status: "to-do"
        
        }
        const task = await axiosPublic.post('/tasks', uploadInfo);
        console.log(task.data)
        if (task.data.insertedId) {

            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.title} is added successfully.`,
                showConfirmButton: false,
                timer: 1500
            });

        }
        





    }
    return (
        <div className=" flex justify-center my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card flex-shrink-0 lg:w-[45rem] border-[2px] bg-cyan-500  shadow-none border-slate-500">
                    <div className="card-body">
                        <h1 className="text-3xl text-center text-black font-bold">Create a Task</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Title</span>
                            </label>
                            <input
                                type="text"
                                {...register('title', { required: true })}
                                name="title"
                                placeholder="Title"
                                className="input input-bordered"
                                required
                            />
                            {errors.title && <span>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Description</span>
                            </label>
                            <input
                                type="text"
                                {...register('description', { required: true })}
                                name="description"
                                placeholder=" Description"
                                className="input h-[6rem] input-bordered"
                                required
                            />
                            {errors.description && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-bold">Dead Line</span>
                            </label>
                            <input
                                type="date"
                                {...register('deadLine', { required: true })}
                                name="deadLine"
                                placeholder="Dead Line"
                                className="input input-bordered"
                                required
                            />
                            {errors.shortDescription && <span>This field is required</span>}
                        </div>


                        
                         
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white font-bold">Priority</span>
                            </label>
                            <select {...register('priority', { required: true })} className="select select-bordered" required>
                                <option value="" className="font-bold" disabled>
                                    Select Priority:
                                </option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                                
                                
                                
                            </select>
                            {errors.category && <span>This field is required</span>}
                        </div>

                        
                        

                        <div className="form-control mt-6">
                            <button type="submit" className="btn text-white bg-black">
                                Create Task
                            </button>
                        </div>
                    </div>
                </div>
            </form>







        </div>
    );
};

export default CreateTask;