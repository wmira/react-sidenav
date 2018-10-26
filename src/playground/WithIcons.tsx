
import * as React from 'react'
import styled from 'styled-components';
import { Nav } from 'react-sidenav/nav/Nav';
import { SideNav } from 'react-sidenav';
import { Container as BaseContainer } from 'react-sidenav/playground/Container'
import { INavTheme, INavSelectionArg } from 'react-sidenav/types';
import {
    Body
} from './Container'
import { Icon, IconProp } from "react-icons-kit";

import { fileEmpty as ic_aspect_ratio } from "react-icons-kit/icomoon";
import { gear as ic_business } from "react-icons-kit/fa";
import { lock as ic_business_center } from "react-icons-kit/fa";
import { infoCircle as ic_format_list_bulleted } from "react-icons-kit/fa";
import { users } from 'react-icons-kit/fa'


const SideNavContainer = styled.div`
    width: 200px;
    height: 100%;
    background: #2c3e50;
    color: #FFF;
`
const Container = styled(BaseContainer)`
    width: 200px;
    height: 440px;
`

const theme: INavTheme = {
    hoverBgColor: '#00bcd4',
    hoverColor: '#FFF',
    selectionBgColor: '#00bcd4'
}

interface IState {
    selectionPath: string

}

const Title = styled.div`
    padding: 12px;
`;
const Icon20 = (props: IconProp) =>  <Icon size={props.size || 20} icon={props.icon} />;
const Label = styled.span`
    padding-left: 12px;
`
const SubLabel = styled.span`
    padding-left: 20px;
`

export class WithIcons extends React.Component<{}, IState> {
    public state: IState = { selectionPath: '1' }

    public onItemSelection = (arg: INavSelectionArg) => {
        this.setState({ selectionPath: arg.path })
    }
    public render() {

        return (
            <Container>
                <Body>
                    <SideNavContainer>
                        <SideNav
                            expandOnHover={true}
                            selectedPath={this.state.selectionPath}
                            onItemSelection={this.onItemSelection}
                            theme={theme}>
                            <Title> React SideNav </Title>
                            <Nav id="dashboard">
                                <Icon20 icon={ic_aspect_ratio} />
                                <Label>Dashboard</Label>
                            </Nav>
                            <Nav id="sales">
                                <Icon20 icon={ic_business} />
                                <Label>Sales</Label>
                            </Nav>
                            <Nav id="products">
                                <Icon20 icon={ic_business_center} />
                                <Label>Products</Label>
                            </Nav>
                            <Nav id="customers">
                                <Icon20 icon={users} />
                                <Label>Customers</Label>
                                <Nav id="dashboard2">
                                    <SubLabel> Search </SubLabel>
                                </Nav>
                                <Nav id="sales2">
                                    <SubLabel> Promote </SubLabel>
                                </Nav>
                                <Nav id="products2">
                                    <SubLabel> Social Media </SubLabel>
                                </Nav>
                            </Nav>
                            <Nav id="orders">
                                <Icon20 icon={ic_format_list_bulleted} />
                                <Label>Orders</Label>
                            </Nav>
                    </SideNav>

                    </SideNavContainer>
                </Body>
            </Container>
        )
    }
}
