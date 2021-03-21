import React,{useState} from 'react';
import {
     BrowserRouter as Router,
     Switch,
     Route
   } from "react-router-dom";
   import MainLogo from '../UI/MainLogo';
   import MenuTrigger from '../UI/MenuTrigger';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';
import Section5 from '../Section5';
import {Wrapper,MainNavigationLink,MobileMenuClosed,MobileMenu,Navigation,LogoText,NavigationLink,AllLinksWrapper,NavigationLinkItem} from './styles';
import SectionHome from '../SectionHome';

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuHandler = () => {
    if(isMenuActive){
      setIsMenuActive(false);
    }else{
      setIsMenuActive(true);
    }
    window.scrollTo(0,0);
  }
  const closeMenu = () => {
    setIsMenuActive(false);
    window.scrollTo(0,0);
  }

     return (
     <Router>
      <div>
        <Wrapper>
          <Navigation>
            <NavigationLinkItem onClick={closeMenu}>
              <MainNavigationLink to="/finance-analytics-app/">
                <MainLogo/>
                <LogoText>Справочник финансиста</LogoText>
              </MainNavigationLink>
            </NavigationLinkItem>
              <MenuTrigger onClick={menuHandler}/>

              {isMenuActive ? 
                <MobileMenu>
                <NavigationLinkItem onClick={menuHandler}>
                  <NavigationLink to="/finance-analytics-app/section1">Анализ финансовой устойчивости</NavigationLink>
                </NavigationLinkItem>
                <NavigationLinkItem onClick={menuHandler}>
                  <NavigationLink to="/finance-analytics-app/section2">Анализ ликвидности</NavigationLink>
                </NavigationLinkItem>
                <NavigationLinkItem onClick={menuHandler}>
                  <NavigationLink to="/finance-analytics-app/section3">Анализ финансовых результатов</NavigationLink>
                </NavigationLinkItem>
                <NavigationLinkItem onClick={menuHandler}>
                  <NavigationLink to="/finance-analytics-app/section4">Анализ оборачиваемости и основных средств</NavigationLink>
                </NavigationLinkItem>
                <NavigationLinkItem onClick={menuHandler}>
                  <NavigationLink to="/finance-analytics-app/section5">Финансовый анализ</NavigationLink>
                </NavigationLinkItem>
              </MobileMenu>
              : <MobileMenuClosed/>
              }

            <AllLinksWrapper>
              <NavigationLinkItem>
                <NavigationLink to="/finance-analytics-app/section1">Анализ финансовой устойчивости</NavigationLink>
              </NavigationLinkItem>
              <NavigationLinkItem>
                <NavigationLink to="/finance-analytics-app/section2">Анализ ликвидности</NavigationLink>
              </NavigationLinkItem>
              <NavigationLinkItem>
                <NavigationLink to="/finance-analytics-app/section3">Анализ финансовых результатов</NavigationLink>
              </NavigationLinkItem>
              <NavigationLinkItem>
                <NavigationLink to="/finance-analytics-app/section4">Анализ оборачиваемости и основных средств</NavigationLink>
              </NavigationLinkItem>
              <NavigationLinkItem>
                <NavigationLink to="/finance-analytics-app/section5">Финансовый анализ</NavigationLink>
              </NavigationLinkItem>
            </AllLinksWrapper>
          </Navigation>
        </Wrapper>
        
        <Switch>
          <Route path="/finance-analytics-app/section1">
            <Section1/>
          </Route>
          <Route path="/finance-analytics-app/section2">
            <Section2/>
          </Route>
          <Route path="/finance-analytics-app/section3">
            <Section3/>
          </Route>
          <Route path="/finance-analytics-app/section4">
            <Section4/>
          </Route>
          <Route path="/finance-analytics-app/section5">
            <Section5/>
          </Route>
          <Route path="/finance-analytics-app/">
            <SectionHome/>     
          </Route>
        </Switch>
      </div>
    </Router>
     )
}

export default NavBar;