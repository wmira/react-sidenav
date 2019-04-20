import React from "react";
import styled from "styled-components";
import { SideNav, Nav, NavContext } from "react-sidenav";
import { Flex, SideNavCont } from "./containers";

const ItemCont = styled.div<{ selected: boolean}>`
  color: ${props => (props.selected ? "rgb(0, 166, 90)" : "#555")};
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    color: rgb(0, 166, 90);
  }
`;

export const Item = props => {
  const context = React.useContext(NavContext);

  return <ItemCont selected={context.selected}>{props.children}</ItemCont>;
};

export const Basic = () => {
  return (
    <div>
      <SideNavCont style={{ border: "1px solid #E5E5E5" }}>
        <SideNav>
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
      <div style={{ flex: 2 }}>
        <blockquote>
          <strong>react-sidenav</strong> tries to be non opinionated when it comes to rendering
          navigation items. With this approach, users should be able to render
          any element as needed while the library provide state transition via
          context.
        </blockquote>
        <blockquote>
          To use, render the top most SideNav element with Nav elements as
          children. You can then decide what to render under each Nav element.
          By accessing the NavContext, you can decide to render an element based
          on the state it is currently on.
        </blockquote>
      </div>      
    </div>
  );
};
