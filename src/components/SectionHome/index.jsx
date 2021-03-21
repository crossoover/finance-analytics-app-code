import React from 'react';
import { NextScreenWrapper,GlobalStyle,MainWrapper,SpecialLink,PlusImage,ThirdPlusImage,ForthPlusImage,SectionText,FifthSectionText,ForthSectionText,FirstSectionText,ThirdSectionText,SecondSectionText,Heading,SectionsWrapper,Section,FirstSection,SecondSection,ThirdSection,ForthSection,FifthSection } from './styles';
import AdditionalInfo from './AdditionalInfo'
import { Footer } from '../Footer';
const SectionHome = () => {

  return (
    <MainWrapper>
      <GlobalStyle/>
         <Heading>Ваш новый финансовый помощник уже здесь!</Heading>
         <SectionsWrapper>
           <SpecialLink to='/finance-analytics-app/section1'>
            <FirstSection>
              <FirstSectionText>Анализ финансовой устойчивости</FirstSectionText>
              <PlusImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-plus-5.png&r=255&g=255&b=255" alt="Open button"/>
            </FirstSection>
           </SpecialLink>

           <SpecialLink to='/finance-analytics-app/section2'>
            <SecondSection>
              <SecondSectionText>Анализ ликвидности</SecondSectionText>
              <PlusImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-plus-5.png&r=188&g=199&b=88" alt="Open button"/>
            </SecondSection>
           </SpecialLink>

           <SpecialLink to='/finance-analytics-app/section3'>
            <ThirdSection>
              <ThirdSectionText>Анализ финансовых результатов</ThirdSectionText>
              <ThirdPlusImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-plus-5.png&r=255&g=255&b=255" alt="Open button"/>
            </ThirdSection>
           </SpecialLink>

           <SpecialLink to='/finance-analytics-app/section4'>
            <ForthSection>
              <ForthSectionText>Анализ оборачиваемости и основных средств</ForthSectionText>
              <ForthPlusImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-plus-5.png&r=255&g=255&b=255" alt="Open button"/>
            </ForthSection>
           </SpecialLink>

           <SpecialLink to='/finance-analytics-app/section5'>
           <FifthSection>
             <FifthSectionText>Финансовый анализ</FifthSectionText>
             <PlusImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-plus-5.png&r=0&g=0&b=0" alt="Open button"/>
           </FifthSection>
           </SpecialLink>
          </SectionsWrapper>
          
         <NextScreenWrapper>
           <AdditionalInfo/>
         </NextScreenWrapper>
        <Footer/>
    </MainWrapper>
    
  );
} 

export default SectionHome;
