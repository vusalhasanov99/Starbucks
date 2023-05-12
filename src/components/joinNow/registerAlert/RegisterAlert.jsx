import { Alert, Stack } from '@mui/material'
import React from 'react'
import './RegisterAlert.css'
function RegisterAlert() {
    return (
        <div className='registerAlert'>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="success">
                    Register successfull
                </Alert>
            </Stack>
        </div>
    )
}

export default RegisterAlert
