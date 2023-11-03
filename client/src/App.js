import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default App;
