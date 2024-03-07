import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protect = (props) => {
    const {Component} = props
    const navigate = useNavigate()
    
    useEffect(()=>{ 
        const login = localStorage.getItem('token')
        if(!login) { 
            navigate('/')
        }
    })
  return (
    <div> 
        <Component/>
    </div>
  )
}

export default Protect