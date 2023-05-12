import { Alert, Stack } from '@mui/material'
import React from 'react'

function SignInCorrectAlert() {
  return (
    <div className='signInAlert'>
         <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="success">
               Sign in successfull 
                </Alert>
            </Stack>
    </div>
  )
}

export default SignInCorrectAlert
