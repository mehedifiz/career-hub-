import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Saveapplied } from '../../Utility/Locak';
const JobD = () => {

    const jobs = useLoaderData();
    const {id} = useParams() 
console.log(jobs , id)

const idint = parseInt(id)

const job = jobs.find(job => job.id == idint);




const handleApplied = ()=>{
    Saveapplied(idint)

toast('You have applied for this job !')
}




    return (
        <div className=''>

            <div className='grid gap-4 md:grid-cols-4 '>

            <div className='border md:col-span-3 '>

<div className='flex gap-2 my-5'>
    <h4 className='font-extrabold  px-3 flex-grow'>Job Description:</h4> 
    <p className="">{job.job_description}</p>
    
</div>

<div className='flex gap-2 my-5'>
    <h4 className='font-extrabold  px-3 flex-grow'>Job Responsibility:</h4> 
    <p className="">{job.job_responsibility}</p>
    
</div>

<div className=' gap-2 my-5'>
    <h4 className='font-extrabold  px-3 '>Educational Requirements:</h4> 
    <p className="ml-5">{job.educational_requirements}</p>
    
</div>
<div className=' gap-2 my-5'>
    <h4 className='font-extrabold  px-3 '>Experiences:</h4> 
    <p className="ml-5">{job.experiences}</p>
    
</div>


</div>


                <div className='border'>

                    <div className='ml-2'>
                        <div className='mt-2 pb-4  border-b-[1px]'>
                <h3 className='font-extrabold'>Job Details</h3>

                        </div>



                        
                        <div className='border-b-[1px]  pmt-2 pb-4 text-center'>

                        <div className='flex my-2 gap-4'>
                            <h2 className='font-bold'>Salary:</h2>
                            <p  className='font-bold'>{job.salary}( Per Month)</p>
                            </div>

                            <div className='flex my-2 gap-4'>
                            <h2  className='font-bold'>Job Title:</h2>
                            <p className='text-sm'>{job.job_title}</p>
                            </div>
                           


                        </div>
                

                        <div>
                        <h3  className='font-extrabold'>Contact Information</h3>

                        <div className='flex my-2 gap-4'>
                            <h2  className='font-bold'>Phone:</h2>
                            <p className='text-sm'>{job.contact_information.phone}</p>
                            </div>
                            <div className='flex my-2 gap-4'>
                            <h2  className='font-bold'>Email:</h2>
                            <p className='text-sm'>{job.contact_information.email}</p>
                            </div>
                            <div className='flex my-2 gap-4'>
                            <h2  className='font-bold'>Address:</h2>
                            <p className='text-sm'>{job.contact_information.address}</p>
                            </div>


                        </div>




                    </div>





                    <button onClick={handleApplied} className='w-full btn btn-secondary '>Apply Now</button>
                </div>

            </div>


            <ToastContainer />
        </div>
    );
};

export default JobD;