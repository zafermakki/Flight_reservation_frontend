import React from 'react'
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await axios.post(
                'http://127.0.0.1:8000/api/auth/client/logout/',
                {},
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            );
            localStorage.removeItem('token');
            alert(response.data.message);
            navigate('/login');
        } catch (err) {
            alert(err.response?.data?.error || 'An error occurred');
        }
    }

  return (
    <div>
        dashboard
        <Button 
            variant='contained'
            color='secondary'
            onClick={handleLogout}
        >
            logout
        </Button>
    </div>
  )
}

export default Dashboard