import React from 'react'
import './SignInAlert.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function SignInIncorrectAlert() {
    return (
        <div className='signInAlert'>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="error">
                Email or password is incorrect
                </Alert>
            </Stack>
        </div>
    )
}

export default SignInIncorrectAlert
