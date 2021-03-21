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

const optionsArray = [
  'Коэффициент абсолютной ликвидности',
  'Коэффициент быстрой ликвидности',
  'Коэффициент обеспеченности собственными средствами',
  'Коэффициент текущей ликвидности',
  'Рабочий капитал',
  'Собственные оборотные средства'
];  

const Section2 = () => {

  return (
    <SectionWrapper>
      <Section>
        <SectionHeading>Анализ ликвидности</SectionHeading>
        <SectionLinks>
        {optionsArray.map((item,index)=>{
            let redirectUrl = `/finance-analytics-app/section2/option${index+1}`;
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
        <Route path="/finance-analytics-app/section2/option6">
               <Option6/>
        </Route>
        <Route path="/finance-analytics-app/section2/option5">
               <Option5/>
        </Route>
        <Route path="/finance-analytics-app/section2/option4">
               <Option4/>
        </Route>
        <Route path="/finance-analytics-app/section2/option3">
               <Option3/>
        </Route>
        <Route path="/finance-analytics-app/section2/option2">
               <Option2/>
        </Route>
        <Route path="/finance-analytics-app/section2/option1"> 
               <Option1/>
        </Route>
      </Switch>
    </SectionWrapper>
  );
} 

export default Section2;
