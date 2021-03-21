import styled,{ createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     *{
          box-sizing: border-box;
          font-family: 'Helvetica', sans-serif;
          border: none;
          outline: none;
          margin: 0;
          padding: 0;
          color: black;
          scroll-behavior: smooth;
     }    
     body {
          min-height: 100%;
          background: #fff;
          /* background: linear-gradient(0deg, rgba(128,128,128,1) 0%, rgba(0,0,0,1) 80%); */
          background-attachment: fixed;
          overflow-x: hidden;
     }
     li{
          list-style-type: none;
     }
     ::-webkit-scrollbar{
          width: 8px;
          background: black;
     }

     ::-webkit-scrollbar-thumb{
          background: linear-gradient(#555555,#555555);
     border-radius: 4px;
     }

     ::-webkit-scrollbar-thumb:active{
          background: linear-gradient(transparent,#95CB5A,#DAC355,transparent);
     
          border-radius: 4px;
     }
`;
