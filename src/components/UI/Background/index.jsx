import React from 'react';
import {CirclesWrap,Circle1,Circle2,Circle3,Circle4,Circle5} from './styles';

const Background = () => {
     const windowWidth = window.innerWidth;

     if (windowWidth > 1070){
          console.log("wide");
          return (<CirclesWrap>
          <Circle1/>
          <Circle2/> 
          <Circle3/> 
          <Circle4/> 
          <Circle5/>  
        </CirclesWrap>)
     }else{
          console.log("narrow");
          return <></>;
     }
}


export default Background;