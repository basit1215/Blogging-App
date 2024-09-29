import React, { useState, useEffect, Component } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Config/Firebase/firebasemethods'
import { onAuthStateChanged } from 'firebase/auth'

const ProtectedRoutes = ({ component }) => {

    const [isUser, setIsUser] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(true);
                return
            }
            navigate('/login')
        })
    }, [])
    return (
        setIsUser? component : <h1>Loading...</h1>
    )
}

export default ProtectedRoutes