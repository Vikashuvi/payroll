import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createEmployee } from '../services/employee-service';

function AddEmployee() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullname: '',
        email: '',
        phonenumber: '',
        department: 'HR',
        joinDate: '',
        status: 'Active'
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!form.fullname || !form.email ) {
            alert('Name and Email are required')
            return;
        }

        try {
            const saved = await createEmployee(form);
            alert(`Employee Created: ${saved.empId}`)
            setForm({fullname: '',
                email: '',
                phonenumber: '',
                department: 'HR',
                joinDate: '',
                status: 'Active'})
            navigate('/employee')
        }catch(err){
            console.log(err)
            alert('Failed to save employee')
        }

    }

    return (
        <div className='shadow-xl w-md h-[600px] p-8 flex flex-col gap-4 bg-white rounded-2xl'>
            <div className='flex items-center justify-left'><h1 className='font-bold text-2xl'>EmployeeDetails</h1></div>

            <form className='flex flex-col gap-10' onSubmit={handleSubmit}>
                {/* <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Employee ID</label>
                        <input type="text" name='empId' className='pl-2 border border-gray-400 rounded' />
                    </div> */}

                <div className='flex flex-col gap-3'>

                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Full Name</label>
                        <input value={form.fullname} onChange={(e) => setForm({ ...form, fullname: e.target.value })} type="text" name='fullname' placeholder='Enter your name' className='pl-2 border border-gray-400 rounded' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Email</label>
                        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" name='email' placeholder='example@gmail.com' className='pl-2 border border-gray-400 rounded' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Phone Number</label>
                        <input value={form.phonenumber} onChange={(e) => setForm({ ...form, phonenumber: e.target.value })} type="tel" name='phonenumber' placeholder='+1 9698644146' className='pl-2 border border-gray-400 rounded' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Department</label>
                        <select value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} name="department" id="" className='border border-gray-300 rounded'>
                            <option value="HR">HR</option>
                            <option value="Tech">Tech</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='font-medium text-sm'>Date of joining</label>
                        <input type="date" value={form.joinDate} onChange={(e) => setForm({ ...form, joinDate: e.target.value })} name="joinDate" id="" className='border border-gray-300 rounded' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Status</label>
                        <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} name="status" id="" className='border border-gray-300 rounded'>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>


                <div className='flex flex-row items-center justify-center gap-4'>
                    <button type='submit' className='bg-green-600 w-full py-2 rounded-lg'>Submit</button>
                    <button type='button' className='bg-gray-500 w-full rounded-lg py-2' onClick={() => { navigate('/dashboard') }} >Cancel</button>
                </div>


            </form>
        </div>
    );
}

export default AddEmployee;