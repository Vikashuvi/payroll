import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { signOut } from 'aws-amplify/auth';
import { replace, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    async function handleSignOut (e) {
        e.preventDefault()
        try {
            const user = signOut();
            navigate('/', {replace: true})
        }catch(error) {
            console.log('Error in Logout', error);
        }
    }

    return (
        <div className='bg-white shadow w-full h-18 flex items-center justify-between px-4 md:px-12'>
            <div className='cursor-pointer' onClick={ ()=> navigate('/dashboard')} ><h1 className='text-2xl font-bold'>Payroll Management</h1></div>
            <div className='flex flex-row gap-2 md:gap-4'>
            <div className='bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center'><IoPersonSharp/></div>
            <div className='bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center'><IoMenu/></div>
            <button className='border rounded-md px-4 py-2 font-bold bg-red-500 text-white cursor-pointer' onClick={handleSignOut}>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;