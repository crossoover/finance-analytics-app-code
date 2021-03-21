import styled,{keyframes} from 'styled-components';

const ripple = keyframes`
     0%{
     transform: scale(0.8);
     }
     
     50%{
     transform: scale(1.1);
     }
     
     100%{
     transform: scale(0.8);
     }
`;

export const CirclesWrap = styled.div`
     width: 650px;
     height: 650px;
     right: 0px;
     bottom: -140px;
     overflow: hidden;
     position: absolute;
`;

export const Circle = styled.div`
     position: absolute;
     border-radius: 50%;
     background: #000000;
     box-shadow: 0px 0px 1px 0px #616161;
     z-index: -1;

     @media screen and (max-width: 1070px){
          display: none;
     }
`;

export const Circle1 = styled(Circle)`
     width: 300px;
     height: 300px;
     right: -150px;
     bottom: -150px;
     opacity: 0.2;
     animation: ${ripple} 10s infinite;
`;

export const Circle2 = styled(Circle)`
     width: 500px;
     height: 500px;
     right: -250px;
     bottom: -250px;
     opacity: 0.2;
     animation: ${ripple} 11s infinite;
`;

export const Circle3 = styled(Circle)`
     width: 700px;
     height: 700px;
     right: -350px;
     bottom: -350px;
     opacity: 0.2;
     animation: ${ripple} 12s infinite;
`;

export const Circle4 = styled(Circle)`
     width: 900px;
     height: 900px;
     right: -450px;
     bottom: -450px;
     opacity: 0.1;
     animation: ${ripple} 13s infinite;
`;

export const Circle5 = styled(Circle)`
     width: 1100px;
     height: 1100px;
     right: -550px;
     bottom: -550px;
     opacity: 0.1;
     animation: ${ripple} 14s infinite;
`;

