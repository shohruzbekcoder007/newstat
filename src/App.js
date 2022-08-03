import React from "react";
import Main from "./components/Main";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const themeOptions = createTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#e9e9e9',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={themeOptions}>
      <Main/>
  // </ThemeProvider>
    
  );
}

export default App;
