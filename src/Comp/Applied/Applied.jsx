import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStore } from '../../Utility/Locak';
import { MdOutlineLocationOn  } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";

const Applied = () => {

    const jobs = useLoaderData();

    const [AppJOb ,setAppJob ] = useState([])

    useEffect(()=>{
        const storedjobsID = getStore();

        if(jobs.length > 0){
                // const Jobsapplied=  jobs.filter(job => storedjobsID.includes(job.id) )

                const Jobsapplied = [];

                for (const id of storedjobsID){
                    const job = jobs.find(job => job.id === id )
                    if(job){
                        Jobsapplied.push(job)
                    }
                }  
                setAppJob(Jobsapplied)

                console.log(jobs,storedjobsID ,Jobsapplied)
        }

    } ,[])


    return (
        <div>
            <h3 className='text-2xl my-5 text-center bg-green-800 shadow-sm text-gray-200-800' >Job Applied : {AppJOb.length} jobs</h3>


            {
                AppJOb.map(job => <div className='my-10 flex '>
{/* image */}

                            <div className='flex last:justify-end last:items-center'>
                        <div className= ' w-52 h-52 bg-slate-300 flex justify-center items-center '>
                            <img className='' src={job.logo} alt=""  width="120px"/>
                        </div>



                        <div className='ml-10'>

                        <div> <h2 className='font-extrabold text-3xl my-2'>{job.job_title}</h2> 
                        <p className='font-light text-xl my-2 text-gray-500'>{job.company_name}</p>
                        </div>


                        <div>
                        <div>
                <button className="px-5 text-[#7E90FE]   py-2 font-extrabold border rounded border-lime-800 mr-4">{job.remote_or_onsite}</button>
                <button className="px-5 py-2 font-extrabold border rounded border-lime-800 mr-4 text-[#7E90FE] ">{job.job_type}</button>
            </div>

                        </div>



                        <div className='flex mt-4 text-xl'>

                        <h2 className="flex mr-2"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>{job.location}</h2>
<h2 className=" flex mr-4" > <FiDollarSign className="text-2xl"></FiDollarSign> {job.salary} (per month)</h2>
                        </div>




                        </div>


                        <div>

                            <button className='btn btn-primary'>View Details</button>

                        </div>

                        </div>


                </div>)
            }


        </div>
    );
};

export default Applied;