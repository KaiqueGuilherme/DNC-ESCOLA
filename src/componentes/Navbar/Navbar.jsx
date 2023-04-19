import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './navbar.css'
import { Container } from '@mui/material';


export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1,  height: '4.2rem' }}>
      <AppBar position="static" sx={{ bgcolor: '#303030', height: '4.2rem'}} >
        <div className="Nav">
        <Container className='Container2' maxWidth="xl"  >
        <Toolbar  className='container' variant="dense" sx={{ alignItems: 'center',height: '4.2rem' }}>
            <img className='logo' src="./assets/logotipo_dnc_principal_branco-1.png" alt="" />
            <Button className='buttonNav' variant="contained" sx={{bgcolor: '#0C70F2;'}}>Quero Participar</Button>
        </Toolbar>
      
        </Container>
        </div>
      </AppBar>
    </Box>
  );
}
 