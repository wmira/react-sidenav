
import * as React from 'react'
import styled from 'styled-components'
import { Center } from 'react-containers'

import { Container } from 'react-sidenav/playground/Container';
import { IOnItemSelectionArg } from 'react-sidenav/types';
import { IExampleProp } from 'react-sidenav/playground/IExampleProp';
import { Route, MemoryRouter } from 'react-router-dom';
import { WithRR4 } from './WithRR4'
const SideNavCnt = styled.div`
    padding: 12px 0px;
    height: 100%;
    border-right: 1px solid #E5E5E5;
    flex: 3;
    background: ${ (props: { bgColor?: string }) => props.bgColor || 'inherit'};
`
const Body = styled.div`
    flex: 4;
    width: 100%;
`
const InnerCnt = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`



export interface ISideNavViewProp {
    bgColor?: string
    children?: () => React.ReactElement<any>
}

export class SideNavWithRouterView extends React.Component<ISideNavViewProp ,{ selectionPath?: string, selectedId?: string }> {

    public state = { selectionPath: '1' }

    public onItemSelection = (arg: IOnItemSelectionArg) => {

        this.setState({ selectionPath: arg.path, selectedId: arg.id })
    }

    public renderRoute = (a:any) => {
        return <Center> { a.location.pathname } </Center>
    }

    public render() {

        return (
            <MemoryRouter initialEntries={['/1']}>
                <Container>
                    <InnerCnt>
                        <SideNavCnt bgColor={this.props.bgColor}>
                            <WithRR4
                                selectionPath={this.state.selectionPath}
                                onItemSelection={this.onItemSelection}/>
                        </SideNavCnt>
                        <Body>
                            <Route render={this.renderRoute}/>
                        </Body>
                    </InnerCnt>
                </Container>
            </MemoryRouter>
        )
    }


}