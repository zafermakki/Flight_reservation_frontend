import React from 'react'
import Copyright from '@mui/icons-material/Copyright';


const Footer = () => {
  return (
    <div style={{textAlign:"center",margin:"10px"}}>
        <p>This site was published in 2024</p>
        <p>The <Copyright sx={{fontSize: "small"}}/>owned by company</p>
    </div>
  )
}

export default Footer