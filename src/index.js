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
      fontSize: "56px",
      lineHeight: "64px",
      weight: 800,
      "@media( max-width:600px )": {
        fontSize: "36px",
      }
    },
    h2: {
      fontFamily: "Libre Baskerville",
      fontSize: "24px",
      lineHeight: "29px",
      weight: 800,
      "@media( max-width:600px )": {
        fontSize: "22px",
      }
    },
    h3: {
      fontFamily: "Libre Baskerville",
      fontSize: "18px",
      lineHeight: "20px",
      weight: 800,
      "@media( max-width:600px )": {
        fontSize: "16px",
      }
    }
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
