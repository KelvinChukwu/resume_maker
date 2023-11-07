import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline';
import Paper  from '@mui/material/Paper';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="md">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Paper sx={{height: '100vh'}}>
          foobar
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default App;
