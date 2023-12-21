import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useFinished= () => {
    const {user}= useAuth()
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: finished = [],  refetch:reFinished} = useQuery({
        queryKey: ['finished',user],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/tasks?email=${user.email}&status=finished`);
            return res.data;
        }
    })


    return [finished, reFinished]
};

export default useFinished