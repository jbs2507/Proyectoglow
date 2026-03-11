import React from 'react'
import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 'auto',
        bgcolor: '#f48fb1',
        color: 'white',
        width: '100%',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; 2026 Glow by bloom. Todos los derechos reservados.
        </Typography>
           
      </Box>
    </Box>
  )
}
