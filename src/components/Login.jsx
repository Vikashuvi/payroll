import React from 'react';

function Login() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="w-[360px] h-[300px] shadow-2xl bg-white rounded-xl">
                <form className='flex flex-col items-center'>
                    <div className='p-8 flex flex-col items-center gap-4'>
                        <h1 className='text-2xl font-bold'>Payroll Management</h1>
                        <input type="text" placeholder='Mail/Username' className='w-64 shadow border rounded px-4 py-2' />
                        <input type="password" placeholder='Password' className='w-64 shadow border rounded px-4 py-2' />
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white w-64 rounded-md py-2 font-bold'>Sign In</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;