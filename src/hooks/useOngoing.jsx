import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useOngoing= () => {
    const {user}= useAuth()
    
    
    const axiosPublic = useAxiosPublic();
   
    const {data: ongoings = [],  refetch:reOngoing} = useQuery({
        queryKey: ['ongoings',user],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/tasks?email=${user.email}&status=ongoing`);
            return res.data;
        }
    })


    return [ongoings, reOngoing]
};

export default useOngoing