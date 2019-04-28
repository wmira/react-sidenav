/* eslint-disable */
import React from "react";

import styled from 'styled-components'
import { Flex, TextContent, InnerCont } from "./containers";
import { Live } from './Live'

const code = `

/* 
  this uses styled components
  you can use standard css or 
  style attributes as well 
*/
const ItemCont = styled.div\`
  color: \$\{props => (props.selected ? "rgb(0, 166, 90)" : "#555")\};
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    color: rgb(0, 166, 90);
  }
\`

const Item = props => {
  const context = React.useContext(NavContext);
  return (
    <ItemCont selected={context.selected}>
      {props.children}
    </ItemCont>
  )
};

const containerStyle = {
  background: '#FFF',
  border: "1px solid #E5E5E5"
}

render(
  <SideNavCont style={containerStyle}>
    <SideNav defaultSelectedPath={'1'}>
      <Nav id="1">
        <Item>Link 1</Item>
      </Nav>
      <Nav id="2">
        <Item>Link 2</Item>
      </Nav>
      <Nav id="3">
        <Item>Link 3</Item>
      </Nav>
    </SideNav>
  </SideNavCont>
)
`

const LiveContainer  = styled(Flex)`
  max-width: 800px;
`

export const Basic = () => {
  return (
    <>
      <Flex>
        <InnerCont>
          <TextContent style={{ flex: 2 }}>
            <p>
              <strong>react-sidenav</strong> tries to be non opinionated when it comes to rendering
              navigation items. With this approach, users should be able to render
              any element as needed while the library provide state transition via
              context.
            </p>
            <p>
              To use, render the top most SideNav element with Nav elements as
              children. You can then decide what to render under each Nav element.
              By accessing the NavContext, you can decide to render an element based
              on the state it is currently on.
            </p>
            <p>
              The example  below uses styled-components to conditionally render styling the child of a Nav
              element depending on the state from the context
            </p>            
          </TextContent>
        </InnerCont>
      </Flex>
      <LiveContainer>
        <Live code={code}/>
      </LiveContainer>
    </>
  );
};
