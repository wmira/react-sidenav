
import * as React from 'react'
import styled from 'styled-components';
import { SideNav, NavText, NavIcon, Nav } from 'react-sidenav';
import { Container as BaseContainer } from 'react-sidenav/playground/Container'
import { INavTheme, INavSelectionArg } from 'react-sidenav/types';
import {
    Body
} from './Container'
import { Icon, IconProp } from "react-icons-kit";

import { fileEmpty as ic_aspect_ratio } from "react-icons-kit/icomoon";
import { Scheme } from 'react-sidenav/types/Scheme';
// import { gear as ic_business } from "react-icons-kit/fa";
// import { lock as ic_business_center } from "react-icons-kit/fa";
// import { infoCircle as ic_format_list_bulleted } from "react-icons-kit/fa";
// import { users } from 'react-icons-kit/fa'


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



export class NavTextAndIcon extends React.Component<{}, IState> {
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
                            scheme={Scheme.compact}
                            selectedPath={this.state.selectionPath}
                            onItemSelection={this.onItemSelection}
                            theme={theme}>
                            <Title> Basic SideNav </Title>
                            <Nav id="dashboard">
                                <NavIcon><Icon20 icon={ic_aspect_ratio} /></NavIcon>
                                <NavText>Dashboard</NavText>
                            </Nav>

                    </SideNav>

                    </SideNavContainer>
                </Body>
            </Container>
        )
    }
}
