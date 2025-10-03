import React from 'react';
import { FaIdBadge } from "react-icons/fa6";


function SalaryCard() {
    return (
        <div className='w-[260px] h-[350px] shadow-xl flex flex-col items-center justify-between px-8 py-8'>
            <div className='flex flex-col gap-4'>
                <div className='bg-gray-200 w-14 h-14 flex items-center justify-center rounded-lg'>
                    <FaIdBadge size={36} />
                </div>
                <div>
                    <h1 className='font-bold text-3xl'>Salary Setup</h1>
                    <p className='text-lg'>Configure salary structures</p>
                </div>
            </div>
            <button className='bg-blue-900/70 px-14 py-2 rounded-lg text-white font-bold cursor-pointer'>Configure</button>
        </div>
    );
}

export default SalaryCard;