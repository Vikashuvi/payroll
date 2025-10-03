import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {

    const navigate = useNavigate();

    return (
        <div className='shadow-xl w-md h-[600px] p-8 flex flex-col justify-between gap-4 bg-white rounded-2xl'>
            <div className='flex items-center justify-left'><h1 className='font-bold text-2xl'>EmployeeDetails</h1></div>
            <div>
                <form className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Employee ID</label>
                        <input type="text" className='pl-2 border border-gray-400 rounded' />
                    </div>
                     <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Full Name</label>
                        <input type="text" placeholder='Enter your name' className='pl-2 border border-gray-400 rounded' />
                    </div>
                     <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Email</label>
                        <input type="email" placeholder='example@gmail.com' className='pl-2 border border-gray-400 rounded' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Phone Number</label>
                        <input type="phone" placeholder='+1 9698644146' className='pl-2 border border-gray-400 rounded' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Department</label>
                        <select name="" id="" className='border border-gray-300 rounded'>
                            <option value="">HR</option>
                            <option value="">Tech</option>
                            <option value="">Finance</option>
                            <option value="">Marketing</option>
                            <option value="">Sales</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Date of joining</label>
                        <input type="date" name="" id="" className='border border-gray-300 rounded' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Status</label>
                        <select name="" id="" className='border border-gray-300 rounded'>
                            <option value="">Active</option>
                            <option value="">Inactive</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                    <button className='bg-green-600 w-full py-2 rounded-lg'>Submit</button>
                    <button className='bg-gray-500 w-full rounded-lg py-2' onClick={()=> {navigate('/dashboard')}} >Cancel</button>
                    </div>
        </div>
    );
}

export default AddEmployee;