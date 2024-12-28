import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom"
import React from 'react'

const GetStarted = () => {

  const navigate = useNavigate();

  return (
    <div
      style={{
        marginLeft: "520px",
        marginBottom:"10px"
      }}
    >
      <h1 style={{textTransform:"uppercase", color:"#e65100"}}>
        Get started
      </h1>
      <p>If you want to start using the site's services,you must create your own account<br/>
         and then you can book on this site and get special discounts,
         come on, choose<br/> your favorite airline and embark on the most beautiful trips.
      </p>
      <Button variant='contained' onClick={() => navigate('/createaccount')} sx={{backgroundColor:"#7b1fa2",color:"#fff",margin:"5px 0 5px 0"}}>
        Create Account
      </Button>
    </div>
  )
}

export default GetStarted