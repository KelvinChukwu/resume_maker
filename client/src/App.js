import './App.css';
import * as React from 'react';
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline';
import Resume from './Resume';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="md">
        <Resume/>
      </Container>
    </React.Fragment>
  );
}

export default App;
