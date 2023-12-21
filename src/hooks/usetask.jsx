import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";





const useTask = (id) => {
    
    const axiosPublic = useAxiosPublic();
    
   


    const {data: task = [],refetch:reTask,} = useQuery({
        queryKey: ['task',id], 
        
        
        queryFn: async() =>{
            const res = await axiosPublic.get(`/tasks/${id}`);
            return res.data;
            
        }
        
    })
    
    
    
    
    return [task,reTask]


};

export default useTask;