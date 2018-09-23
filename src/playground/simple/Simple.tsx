
import * as React from 'react'
import styled from 'styled-components';
import { Nav } from 'react-sidenav/nav/Nav';
import { SideNav } from 'react-sidenav/SideNav';
import { Center } from 'react-containers';
import { Container as BaseContainer } from 'react-sidenav/playground/Container'
import { INavTheme, INavSelectionArg } from 'react-sidenav/types';

const Body = styled.div`
    display: flex;
`
const SideNavContainer = styled.div`
    width: 200px;
    height: 100%;
`
const Container = styled(BaseContainer)`
    width: 460px;
    height: 440px;
`
const Label = styled.div`
    padding: 12px;
`

const theme: INavTheme = {
    hoverBgColor: '#A8DADC',
    hoverColor: '#FFF',
    selectionColor: '#E63946'
}

const Content = styled.div`
    padding: 12px;
`

interface IState {
    selectionPath: string

}
const Text = styled.div`
    text-align: center;
`
export class Simple extends React.Component<{}, IState> {
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
                            selectedPath={this.state.selectionPath}
                            onItemSelection={this.onItemSelection}
                            theme={theme}>
                            <Label>Sample TOC</Label>
                            <Nav id='1'>
                                Item 1
                                <Nav id={'1'}>
                                    Item 1.1
                                </Nav>
                                <Nav id={'2'}>
                                    Item 1.2
                                    <Nav id={'1'}>
                                        Item 1.2.1
                                    </Nav>
                                    <Nav id={'2'}>
                                        Item 1.2.2
                                    </Nav>
                                </Nav>
                            </Nav>
                            <Nav id='2'>
                                Item 2
                                <Nav id={'1'}>
                                    Item 2.1
                                    <Nav id={'1'}>
                                        Item 2.1.1
                                    </Nav>
                                    <Nav id={'2'}>
                                        Item 2.2.2
                                    </Nav>
                                </Nav>
                            </Nav>
                            <Nav id='3'>
                                Item 3
                            </Nav>
                            <Nav id='4'>
                                Item 4
                            </Nav>
                        </SideNav>
                    </SideNavContainer>
                    <Content>
                        <Center>
                            <div>
                                <div>Simple TOC Example.</div>
                                <Text>{ this.state.selectionPath }</Text>
                            </div>
                        </Center>
                    </Content>
                </Body>
            </Container>
        )
    }
}