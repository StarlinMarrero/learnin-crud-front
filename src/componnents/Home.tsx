import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../middleware/AuthMiddleware'

const Home = () => {

    const history = useHistory();

    const { authData } = useContext(auth)

    useEffect(() => {
        if(!authData) return history.push('/signin')
    }, []);

    if(!authData) return null;
    return (
 
        <div>
            <h1>Hello Home</h1>
        </div>
    
    )
}

export default Home
