import React from 'react';
import {
     Switch,
     Route
   } from "react-router-dom";
   import Scroll from '../Scroll';
   import {SectionWrapper,SectionHeading,SectionLinks,LinkText,LinkItemWrapper,Section,LinkItem} from '../Styles/SectionStyles';
   import Option1 from './Option1';
   import Option2 from './Option2';
   import Option3 from './Option3';
   import Option4 from './Option4';
   import Option5 from './Option5';
   import Option6 from './Option6';
   import Option7 from './Option7';
   import Option8 from './Option8';
   import Option9 from './Option9';
   import Option10 from './Option10';


const optionsArray = [
  'Коэффициент автономии',
  'Коэффициент капитализации',
  'Коэффициент обеспеченности запасов',
  'Коэффициент покрытия активов',
  'Коэффициент покрытия инвестиций',
  'Коэффициент покрытия процентов',
  'Коэффициент финансовой зависимости',
  'Отношение долга к EBITDA',
  'Чистые активы',
  'Финансовый леверидж'
];   

const Section1 = () => {

  return (
    <SectionWrapper>
      <Section>
        <SectionHeading>Анализ финансовой устойчивости</SectionHeading>
          <SectionLinks>
          {optionsArray.map((item,index)=>{
            let redirectUrl = `/finance-analytics-app/section1/option${index+1}`;
            return(
              <LinkItemWrapper key={item}>
                <LinkItem to={redirectUrl}>
                  <LinkText onClick={Scroll}>{item}</LinkText>
                </LinkItem>
              </LinkItemWrapper>
              )}
          )}  
        </SectionLinks>
     </Section>
      <Switch>
        
        <Route path="/finance-analytics-app/section1/option10"> 
               <Option10/>
        </Route>
        <Route path="/finance-analytics-app/section1/option9"> 
               <Option9/>
        </Route>
        <Route path="/finance-analytics-app/section1/option8"> 
               <Option8/>
        </Route>
        <Route path="/finance-analytics-app/section1/option7"> 
               <Option7/>
        </Route>
        <Route path="/finance-analytics-app/section1/option6"> 
               <Option6/>
        </Route>
        <Route path="/finance-analytics-app/section1/option5"> 
               <Option5/>
        </Route>
        <Route path="/finance-analytics-app/section1/option4"> 
               <Option4/>
        </Route>
        <Route path="/finance-analytics-app/section1/option3"> 
               <Option3/>
        </Route>
        <Route path="/finance-analytics-app/section1/option2"> 
               <Option2/>
        </Route>
        <Route path="/finance-analytics-app/section1/option1"> 
               <Option1/>
        </Route>
      </Switch>
    </SectionWrapper>
  );
} 

export default Section1;
