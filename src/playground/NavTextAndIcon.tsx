import * as React from "react";
import { SideNav, Nav as BaseNav } from "react-sidenav";
import styled from "styled-components";
import { Container as BaseContainer } from 'react-sidenav/playground/Container'
import { Icon as BaseIcon } from "react-icons-kit";


import { dashboard } from "react-icons-kit/fa";
import { users } from "react-icons-kit/fa";
import { shoppingCart } from "react-icons-kit/fa";
import { cubes } from "react-icons-kit/fa";
import { circleO } from "react-icons-kit/fa";



const Container = styled(BaseContainer)`
    width: 100px;
    height: 100%;
    background: #2c3e50;
    color: #FFF;
`

const IconCnt = styled.div`
  color: #FFF;
  display: flex;
  justify-content: center;
  aligh-items: center;
`;

const Nav = styled(BaseNav)`
  flex-direction: column;
`;

const theme = {
  selectionColor: "#FFF",
  hoverBgColor: "#181b20",
  selectionBgColor: "#E64A19"
};

const Text = styled.div`
  font-size: 0.72em;
  text-transform: uppercase;
`;

const Icon = (props: any) => <BaseIcon size={32} icon={props.icon} />;

export class NavTextAndIcon extends React.Component {
  public state = { selectedPath: "1" };

  public onItemSelection = (arg: any) => {
    this.setState({ selectedPath: arg.path });
  };

  public render() {
    return (
      <Container>
          <SideNav
            defaultSelectedPath="1"
            theme={theme}
            onItemSelection={this.onItemSelection}
          >
            <Nav id="1">
              <IconCnt>
                <Icon icon={dashboard} />
              </IconCnt>
              <Text>Dashboard</Text>
            </Nav>
            <Nav id="2">
              <IconCnt>
                <Icon icon={users} />
              </IconCnt>
              <Text>Users</Text>
            </Nav>
            <Nav id="3">
              <IconCnt>
                <Icon icon={shoppingCart} />
              </IconCnt>
              <Text>Deliveries</Text>
            </Nav>
            <Nav id="4">
              <IconCnt>
                <Icon icon={circleO} />
              </IconCnt>
              <Text>Orders</Text>
            </Nav>
            <Nav id="5">
              <IconCnt>
                <Icon icon={cubes} />
              </IconCnt>
              <Text>Transactions</Text>
            </Nav>
          </SideNav>
      </Container>
    );
  }
}
