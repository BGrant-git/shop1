import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'

import '../src/index.css';
import App from './App.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

ReactDOM.render(    
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </ThemeProvider>
    ,
  document.getElementById('root')
);

