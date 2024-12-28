import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import "./content.css";


const ContentInterfaceImg = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-container">
      <h1 className="animated-text">
        unli<span className='animated-text-s'>mited</span> <span className='animated-text-s'>flig</span>hts
      </h1>
      <p className='information-text'>
          Now on this site you can book to 
          <span style={{color:"#7b1fa2"}}> anywhere </span>
          <span style={{color:'#e65100'}}> in the world by</span> 
          choosing your favorite 
          <span style={{color:"#7b1fa2"}}> airline</span>
      </p>
      <Button className='button-get-started' variant="contained"
          onClick={() => navigate('/createaccount')} 
          sx={{
              backgroundColor:"#7b1fa2",
              color:"#fff"
          }}>
            get started
      </Button>
    </div>
  )
}

export default ContentInterfaceImg