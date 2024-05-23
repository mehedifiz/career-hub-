import { json } from "react-router-dom";

const getStore =()=>
{
    const stored = localStorage.getItem('job-applied');
    if(stored ){
        return JSON.parse(stored)
    }
    return[]
}


const Saveapplied = id =>{


    const storedJob = getStore();

    const exist = storedJob.find(jobID => jobID === id );

    if(!exist){
        storedJob.push(id);
        localStorage.setItem('job-applied' , JSON.stringify(storedJob))
    }




}

export { getStore, Saveapplied}