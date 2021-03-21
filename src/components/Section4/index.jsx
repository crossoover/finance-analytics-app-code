import React from 'react';
import {
     Switch,
     Route
   } from "react-router-dom";
   import {SectionWrapper,SectionHeading,SectionLinks,LinkText,LinkItemWrapper,Section,LinkItem} from '../Styles/SectionStyles';
import Scroll from '../Scroll';
import Option1 from './Option1';
import Option2 from './Option2';
import Option3 from './Option3';
import Option4 from './Option4';
import Option5 from './Option5';
import Option6 from './Option6';
import Option7 from './Option7';
import Option8 from './Option8';

const optionsArray = [
  'Денежный цикл (цикл оборотного капитала)',
  'Оборачиваемость активов',
  'Оборачиваемость дебиторской задолженности',
  'Оборачиваемость запасов',
  'Оборачиваемость кредиторской задолженности',
  'Оборачиваемость оборотных средств',
  'Фондоёмкость',
  'Фондоотдача'
];

const Section4 = () => {

  return (
    <SectionWrapper>
      <Section>
        <SectionHeading>Анализ оборачиваемости и основных средств</SectionHeading>
        <SectionLinks>

        {optionsArray.map((item,index)=>{
            let redirectUrl = `/finance-analytics-app/section4/option${index+1}`;
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
        <Route path="/finance-analytics-app/section4/option8"> 
          <Option8/>
        </Route>
        <Route path="/finance-analytics-app/section4/option7"> 
          <Option7/>
        </Route>
        <Route path="/finance-analytics-app/section4/option6"> 
          <Option6/>
        </Route>
        <Route path="/finance-analytics-app/section4/option5"> 
          <Option5/>
        </Route>
        <Route path="/finance-analytics-app/section4/option4"> 
          <Option4/>
        </Route>
        <Route path="/finance-analytics-app/section4/option3"> 
          <Option3/>
        </Route>
        <Route path="/finance-analytics-app/section4/option2"> 
          <Option2/>
        </Route>
        <Route path="/finance-analytics-app/section4/option1"> 
          <Option1/>
        </Route>
      </Switch>
    </SectionWrapper>
  );
} 

export default Section4;
