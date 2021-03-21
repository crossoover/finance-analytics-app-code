const Scroll = () => {
     let windowScrollHeigth = window.innerHeight;
     let windowScrollWidth = window.innerWidth;
     setTimeout(()=>{
          if(windowScrollWidth<1070){
          window.scrollTo({
               top: windowScrollHeigth,
               behavior: 'smooth'
          });}else{
               window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
               });
          }
     },0);
}


export default Scroll;