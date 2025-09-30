import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getCurrentUser } from 'aws-amplify/auth'

function ProtectedRoute( {children} ) {
    const [loading, setLoading] = useState(true);
    const [authenticated , setAuthenticated] = useState(false);

    useEffect (() => {
        const checkUser = async() => {
            try {
                await getCurrentUser();
                setAuthenticated(true);
            }catch(error) {
                setAuthenticated(false);
            }finally{
                setLoading(false)
            }
        }
        checkUser();
    }, []);
    if(loading) {
        return <p>Loading...</p>
    }

    return authenticated ? children : <Navigate to="/" replace />
}

export default ProtectedRoute;
