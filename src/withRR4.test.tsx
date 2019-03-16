
import * as React from 'react'
import { mount } from 'enzyme';


import { Nav } from './';
import { withRR4 } from './withRR4'
import { MemoryRouter, Route } from 'react-router-dom'
import { SideNav } from 'react-sidenav/SideNav';

describe('withRR4', () => {

    it('selects the path when initial path is one from the nav item', () => {
        const SideNavWithRR4 = withRR4()
        const Nav1 = () => (<div>Nav1</div>)
        const Nav2 = () => (<div>Nav1</div>)
        const Home = () => (<div>Home</div>)
        const wrapper = mount((
            <MemoryRouter
                initialEntries={[""]}
                initialIndex={0}
                >
                <div>
                    <SideNavWithRR4
                        defaultSelectedPath='home'>
                        <Nav id="home">Home</Nav>
                        <Nav id="link1">Nav1</Nav>
                        <Nav id="link2">Nav2</Nav>
                    </SideNavWithRR4>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/link1" component={Nav1} />
                    <Route path="/link2" component={Nav2} />
                </div>
            </MemoryRouter>
        ))

        // ensure we render Home
        expect(wrapper.find(Home)).toHaveLength(1)

        // make sure Nav1 is not yet there
        expect(wrapper.find(Nav1)).toHaveLength(0);

        // now click Nav1/link1
        wrapper.find(Nav).at(1).simulate("click")

        expect(wrapper.find(Nav1)).toHaveLength(1)
    })

    it('uses payload.to to route a Nav when clicked', () => {
        const SideNavWithRR4 = withRR4()
        const HIJ = () => (<div>HIJ</div>)
        const Home = () => (<div>Home</div>)

        const wrapper = mount((
            <MemoryRouter
                initialEntries={[""]}
                initialIndex={0}
                >
                <div>
                    <SideNavWithRR4
                        defaultSelectedPath='abc'>
                        <Nav id="abc" payload={{to: 'hij'}}>Nav</Nav>
                        <Nav id="def">Nav</Nav>
                    </SideNavWithRR4>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/hij" component={HIJ} />
                </div>
            </MemoryRouter>
        ))

        // ensure we render Home
        expect(wrapper.find(Home)).toHaveLength(1)


        // make sure HIJ is not yet there
        expect(wrapper.find(HIJ)).toHaveLength(0);


        // now click Nav1/link1
        wrapper.find(Nav).at(0).simulate("click")

        // make sure HIJ is not yet there
        expect(wrapper.find(HIJ)).toHaveLength(1);
    })
})