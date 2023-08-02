import React from 'react'
import { useLoginContext } from '../context/LoginContext'
import { Outlet , Navigate} from 'react-router-dom'

const PrivateRouter = () => {
  const {user} = useLoginContext()
  return (user ? <Outlet/> : <Navigate to="/Login"/>)
  
}

export default PrivateRouter