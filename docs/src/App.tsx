
import * as React from 'react'
import styled from 'styled-components';
import { SideNav, Nav, NavContext } from 'react-sidenav'
import { MenuIcon } from './icons'
import { Basic } from './Basic'
import { MainContent } from './containers'
import { SubMenu } from './SubMenu';
import { Examples } from './Examples'

const Flex = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 18px;
  text-align: center;
  letter-spacing: 2px;
`;
const Navigation = styled.div`
  background: #222d32;
  height: 100vh;
  width: 220px;
  min-width: 220px;
  color: #fff;
  font-size: 14px;

  @media (max-width: 599px) {
    display: none;
  }
`;

const NavItemCont = styled.div<{ selected: boolean }>`
  display: flex;
  padding: 12px 18px;
  color: ${props => (props.selected ? "#FFF" : "rgb(183, 192, 205)")};
  cursor: pointer;
  background: ${props => (props.selected ? "rgb(29, 37, 49)" : "inherit")};
  transition: all 0.5ms ease-in;
  &:hover {
    color: #fff !important;
  }
  & > span {
    padding: 0px 4px;
  }
`;

const NavItem: React.FC<{title: string}> = props => {
  const context = React.useContext(NavContext);

  return (
    <NavItemCont selected={context.selected}>
      <IconCont><MenuIcon size={10}/></IconCont>
      <span>{ props.title }</span>
    </NavItemCont>
  )
};

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const Container = Flex;

const Views: { [key: string]: React.ComponentType } = {
  basic: Basic,
  sub: SubMenu,
  examples: Examples
};

const IconCont: React.FC = (props) => {
  const context = React.useContext(NavContext);
  return (
    <div style={{padding: '0px 4px', color: context.selected ? "#ff79c6" : '#efefef33' }}>
      <Center>
        { props.children }
      </Center>
    </div>
  )
}


export const App = () => {

  const [ activeView, setActiveView ] = React.useState<string>('basic')

  const onSelection = (selection: string) => {
    setActiveView(selection);
  };

  React.useEffect(() => {
    // get the hash shit    
  }, [])
  const ViewComponent = Views[activeView] || null;

  return (
    <Container>
      <Navigation>
        <Title>React SideNav</Title>
        <SideNav 
          defaultSelectedPath='basic' 
          onSelection={onSelection}>
          <Nav id="basic">
            <NavItem title="Usage and Concepts"/>             
          </Nav>
          <Nav id="sub">
            <NavItem title="Sub Menu"/>              
          </Nav>          
          <Nav id="examples">
            <NavItem title="Examples"/>
          </Nav>          
        </SideNav>
      </Navigation>
      <MainContent>
        {ViewComponent ? <ViewComponent /> : null}
      </MainContent>
    </Container>
  )
}