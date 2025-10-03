import React from 'react'
import Navbar from './Navbar'
import { FaSearch } from "react-icons/fa";
import AddEmployee from './AddEmployeeModel';
import { useState, useEffect } from 'react';
import { deleteEmployee, listEmployee } from '../services/employee-service';

function Employee() {
    const [showModel, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [employees, setEmployees] = useState([])
    const [err, setErr] = useState('')

    useEffect(() => {
        const fetchEmployees = async () => {
            setLoading(true);
            setErr('');
            try {
                const items = await listEmployee();
                setEmployees(items)
            } catch (e) {
                console.log('Error in listing emoployees', e)
            } finally {
                setLoading(false)
            }
        }

        fetchEmployees();
    }, [])

    const handleDelete = async (empId) => {
        try{
            await deleteEmployee(empId);
            setEmployees(prev => prev.filter(e => e.empId !== empId))
        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center pt-12'>
                <div className='w-2/3 h-96 shadow-2xl bg-gray-50 flex flex-col gap-4 p-8'>
                    <div className='flex flex-row justify-between px-8'>
                        <div className='flex flex-row items-center gap-1 shadow'>
                            <div className='pl-2'>
                                <FaSearch size={20} />
                            </div>
                            <input type="text" name="" id="" placeholder=' Search Employee here...' className='pl-2' />
                        </div>
                        <button className='bg-blue-600 px-4 py-2 text-white font-bold rounded' onClick={() => setShowModal(true)} >Add Employee</button>

                        {showModel && (
                            <div className='fixed inset-0 flex items-center justify-center bg-neutral-50'>
                                <AddEmployee />
                            </div>

                        )}

                    </div>

                    {loading && <div className='px-8 py-3'> Loading Employees... </div>}
                    {err && <div>{err}</div>}
                    
                    <div>
                        {!loading && !err &&(
                            <div className='overflow-x-auto bg-white border rounded' >
                                <table className='min-w-full text-left'>
                                    <thead className='bg-gray-100'>
                                        <tr>
                                        <th className='px-4 py-2'>Name</th>
                                        <th className='px-4 py-2'>Email</th>
                                        <th className='px-4 py-2'>Phone</th>
                                        <th className='px-4 py-2'>Department</th>
                                        <th className='px-4 py-2'>Status</th>
                                        <th className='px-4 py-2'>Joined</th>
                                        <th className='px-4 py-2'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(employees?.length ?? 0)=== 0 ? (
                                            <tr>
                                                <td className='px-4 py-2 ' colSpan={6}>No employees found</td>
                                            </tr>
                                        ):(
                                            employees.map(emp => (
                                                <tr key={emp.empId} className='border-t'>
                                                    <td className='px-4 py-3'>{emp.name}</td>
                                                    <td className='px-4 py-3'>{emp.email}</td>
                                                    <td className='px-4 py-3'>{emp.phone}</td>
                                                    <td className='px-4 py-3'>{emp.department}</td>
                                                    <td className='px-4 py-3'>{emp.status}</td>
                                                    <td className='px-4 py-3'>{emp.joinDate}</td>
                                                    <td className='px-4'><button className='px-4 py-1 bg-red-500 text-white font-semibold rounded' onClick={() => handleDelete(emp.empId)}>Delete</button></td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* <div>

                    </div>
                    <div className=''>
                        <button className='bg-blue-600 px-4 py-2 text-white font-bold rounded'>Previous</button>
                    </div> */}


                </div>
            </div>
        </>
    );
}

export default Employee;   