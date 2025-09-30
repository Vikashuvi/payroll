import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'aws-amplify/auth';

function Login(){
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        try{
            const user = await signIn( {username:id, password});
            navigate('/dashboard')
        }catch(error) {
            console.log("Error in sign in", error)
        }finally{
            setLoading(false);
        }
        
    }
    
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="w-[360px] h-[300px] shadow-2xl bg-white rounded-xl">
                <form className='flex flex-col items-center' onSubmit={handleSubmit} >
                    <div className='p-8 flex flex-col items-center gap-4'>
                        <h1 className='text-2xl font-bold'>Payroll Management</h1>
                        <input type="text" placeholder='Mail/Username' className='w-64 shadow border rounded px-4 py-2' value={id} onChange={(e)=> setId(e.target.value)} />
                        <input type="password" placeholder='Password' className='w-64 shadow border rounded px-4 py-2' required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white w-64 rounded-md py-2 font-bold' disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;