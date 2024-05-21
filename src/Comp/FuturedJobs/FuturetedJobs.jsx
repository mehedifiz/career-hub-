import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';
import { key } from 'localforage';

const FuturetedJobs = () => {


    const[jobs , setJobs] = useState([]);

        const [length ,setLength] = useState(4)


useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
} ,[])


    return (
        <div>
            <div className='text-center'> 
                <h2 className="text-5xl">Featured Jobs {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>


            <div className='grid grid-cols-2 gap-6'>

                {
         jobs.slice(0 , length).map((job) => <Job key={job.id}  job={job}></Job>)
                }

            </div>

                        <div className= {length=== jobs.length && 'hidden'    }>
                            <button 
                            onClick={()=> setLength(jobs.length)} className='btn btn-primary'>See More</button>
                        </div>
        </div>
    );
};

export default FuturetedJobs;