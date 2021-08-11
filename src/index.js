import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

let theme = createTheme({
  typography: {
    useNextVariants: true,
    h1: {
      fontFamily: "Libre Baskerville",
      fontSize: "3rem",
      lineHeight: "64px",
      weight: 800,
      "@media( max-width:600px )": {
        fontSize: "2rem",
      }
    },
    h2: {
      fontFamily: "Libre Baskerville",
      fontSize: "1.5rem",
      lineHeight: "29px",
      "@media( max-width:600px )": {
        fontSize: "1.2rem",
      }
    },
    h3: {
      fontFamily: "Libre Baskerville",
      fontSize: "18px",
      lineHeight: "20px",
      weight: 800,
      "@media( max-width:600px )": {
        fontSize: "10px",
      }
    },
    body1: {
      fontFamily: "Libre Baskerville",
      fontSize: "14px",
      lineHeight: "28px",
      weight: 600,
      "@media( max-width:600px )": {
        fontSize: "12px",
      }
    },
  }
})


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
