import React from 'react';
import ReactDOM from 'react-dom/client';
// import React from "react"
// import ReactDOM from "react-dom"
import App from './Portfolio/App';
import GlobalStyles from './Portfolio/styles/GlobalStyle';
import Typography from './Portfolio/styles/Typography';








// ReactDOM.render(
//   <>
//     <GlobalStyles />
//     <Typography />
//     <App />
// 	</>,
// 	document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <>
    <GlobalStyles />
      <Typography />
    <App />
    </>
     
  // </React.StrictMode>
);


