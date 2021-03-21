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

   const optionsArray = [
    'Z-модель Альтмана (Z-счет Альтмана)',
    'Коэффициент восстановления платежеспособности',
    'Коэффициент утраты платежеспособности',
    'Модель Сайфуллина-Кадыкова',
    'Модель Таффлера (Z-счет Таффлера)'
  ];

const Section5 = () => {

  return (
    <SectionWrapper>
      <Section>
        <SectionHeading>Финансовый анализ</SectionHeading>
        <SectionLinks>

        {optionsArray.map((item,index)=>{
            let redirectUrl = `/finance-analytics-app/section5/option${index+1}`;
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
        <Route path="/finance-analytics-app/section5/option5"> 
          <Option5/>
        </Route>
        <Route path="/finance-analytics-app/section5/option4"> 
          <Option4/>
        </Route>
        <Route path="/finance-analytics-app/section5/option3"> 
          <Option3/>
        </Route>
        <Route path="/finance-analytics-app/section5/option2"> 
          <Option2/>
        </Route>
        <Route path="/finance-analytics-app/section5/option1"> 
          <Option1/>
        </Route>
      </Switch>
    </SectionWrapper>
  );
} 

export default Section5;
