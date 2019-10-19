
import * as React from 'react'
import styled from 'styled-components';
import { SideNav, Nav, NavContext } from 'react-sidenav'
import { MenuIcon } from './icons'
import { Basic } from './Basic'
import { MainContent } from './containers'
import { SubMenu } from './SubMenu';
import { Examples } from './Examples'
import {menu as menuIcon} from 'react-icons-kit/entypo/menu'
import { Icon }from 'react-icons-kit'

const Flex = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  text-align: center;
  letter-spacing: 2px;
`

const Navigation = styled.div<{ visible?: boolean }>`
  background: #222d32;
  height: 100vh;
  width: 220px;
  min-width: 220px;
  color: #fff;
  font-size: 14px;
  z-index: 100;
  @media (max-width: 599px) {
    display: ${ props => props.visible === true ? 'block' : 'none' };
    position: absolute;
    left: 0px;
    top: 0px;
  }
`;

const Header = styled.div`
  background: #222d32;  
  display: none;
  color: #FFF;
  @media (max-width: 599px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
const Container = styled(Flex)`
  position: relative;
`;

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

const SideNavigation: React.FC<{visible: boolean, onSelection: (id: string) => void}> = (props) => {
  
  return (
    <Navigation visible={props.visible}>
      <Title>React SideNav</Title>
      <SideNav 
        defaultSelectedPath='basic' 
        onSelection={props.onSelection}
      >
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
  )
}
const ShowMenuIconCont = styled.div`
  height: 100%;
  padding: 4px 0px 4px 10px;
  cursor: pointer;
`

const ShowMenuIcon: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <ShowMenuIconCont onClick={props.onClick}>
      <Icon  size={20} icon={menuIcon} />
    </ShowMenuIconCont>
  )
}

const FlexItem = styled.div`
  flex: 1;
`
export const App = () => {

  const [ activeView, setActiveView ] = React.useState<string>('basic')
  const [ menuVisible, setMenuVisible ] = React.useState<boolean>(false)

  const onSelection = (selection: string) => {
    setActiveView(selection)
    setMenuVisible(false)
  };

  React.useEffect(() => {
    // get the hash shit    
  }, [])
  const ViewComponent = Views[activeView] || null;

  return (
    <Container>
      <SideNavigation visible={menuVisible} onSelection={onSelection}/>   
      <FlexItem>
        <Header>
            <ShowMenuIcon onClick={() => setMenuVisible(true) }/>
            <Title>React SideNav</Title>
        </Header>
        <MainContent>        
          {ViewComponent ? <ViewComponent /> : null}
        </MainContent>
      </FlexItem>
      
    </Container>
  )
}