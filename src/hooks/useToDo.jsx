import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useToDo= () => {
    const {user}= useAuth()
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: todo = [],  refetch:reTodo} = useQuery({
        queryKey: ['todo',user],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/tasks?email=${user.email}&status=to-do`);
            return res.data;
        }
    })


    return [todo, reTodo]
};

export default useToDo