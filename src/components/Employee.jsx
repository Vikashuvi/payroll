import React from 'react'
import Navbar from './Navbar'
import { FaSearch } from "react-icons/fa";

function Employee() {
    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center pt-12'>
                <div className='w-2/3 h-96 shadow-2xl bg-gray-50'>
                    <div className='flex flex-row justify-between px-8'> 
                        <div className='flex flex-row items-center gap-1 shadow'>
                            <div className='pl-2'>
                                <FaSearch size={20} />
                            </div>
                        <input type="text" name="" id="" placeholder=' Search Employee here...' className='pl-2' />
                        </div>
                        <button className='bg-blue-600 px-4 py-2 text-white font-bold rounded'>Add Employee</button>
                    </div>
                    <div>

                    </div>
                    <div className=''>
                        <button className='bg-blue-600 px-4 py-2 text-white font-bold rounded'>Previous</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Employee;   