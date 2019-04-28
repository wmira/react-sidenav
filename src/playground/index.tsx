import * as React from 'react'
import { render } from 'react-dom'

import {
  SideNav,
  Nav,
  NavContext,
  ViewMode
} from '../';

import {
  Icon1,
  Icon2,
  Icon3,
  IIconProp
} from './icons';

import styled from 'styled-components'

interface IItemContainerProp {
  selected: boolean
}
const ItemContainer = styled.div<IItemContainerProp>`
  color: ${ props => props.selected ? 'pink' : 'inherit '};
  padding: 8px;
  &:hover {
    background-color: pink;
    color: ${ props => props.selected ? '#FFF' : 'inherit '};
  }
`
const Item: React.FC = (props) => {

  const context = React.useContext(NavContext)

  return (
    <ItemContainer selected={context.selected}>
      { props.children }
    </ItemContainer>
  )
}

const Flex: React.FC = (props) => {
  return (
    <div style={{display: 'flex'}}>
      { props.children }
    </div>
  )
}

const Container: React.FC<{width?: number}> = (props) => {
  return (
    <div style={{margin: 4, width: props.width || 'auto', height: 200, border: '1px solid #E5E5E5'}}>
      { props.children }
    </div>
  )
}

const IconContainer = styled.div`
  padding: 8px;
  &:hover {
    color: blue;
  }
`

const Icon: React.FC<{icon: React.FC<IIconProp>}> = (props) => {
  const IconComponent = props.icon
  return (
    <IconContainer>
      <IconComponent size={30}/>
    </IconContainer>
  )
}

render(
  <Flex>
    <Container width={140}>
      <SideNav defaultSelectedPath={'page1'}>
        <Nav id='page1'>
          <Item>Page 1</Item>
        </Nav>
        <Nav id='page2'>
          <Item>Page 2</Item>
          <Nav id='page1'>
            <Item>Page 2.1</Item>
          </Nav>
        </Nav>
        <Nav id='page4'>
          <Item>Page 4</Item>
        </Nav>
      </SideNav>
    </Container>
    <Container>
      <SideNav>
        <Nav id='icon1'>
          <Icon icon={Icon1}/>
        </Nav>
        <Nav id='icon2'>
          <Icon icon={Icon2}/>
        </Nav>
        <Nav id='icon3'>
          <Icon icon={Icon3}/>
        </Nav>
        <Nav id='icon4'>
          <Icon icon={Icon2}/>
        </Nav>
      </SideNav>
    </Container>
    <Container width={80}>
      <SideNav mode={ViewMode.compact}>
        <Nav id='page1'>
          <Item>Page1</Item>
        </Nav>
        <Nav id='page2'>
          <Item>Page2</Item>
          <Nav id='page1'>
            <Item>Page2.1</Item>
          </Nav>
          <Nav id='page2'>
            <Item>Page2.2</Item>
            <Nav id='page1'>
              <Item>Page2.2.1</Item>
            </Nav>
            <Nav id='page2.2'>
              <Item>Page2.2.2</Item>
            </Nav>
          </Nav>
        </Nav>
        <Nav id='page3'>
          <Item>Page3</Item>
        </Nav>
      </SideNav>
    </Container>
  </Flex>,
  document.getElementById('app')
)
