
import React from 'react';
import { render } from 'react-dom';
import { SideNav , NavItem, IconSpan } from 'react-sidenav';

import { Icon } from 'react-icons-kit/Icon';
import { shocked } from 'react-icons-kit/icomoon/shocked';

import 'react-sidenav/sidenav.css';

class SideNavDemo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= { selectedNav: 'hey' };
    }
    render() {

        return (

            <SideNav onClick={this.sideNavClicked} scheme='dark' highlightScheme='green' selectedId={this.state.selectedNav}>
                <NavItem id='dashboard'><div><IconSpan><Icon icon={shocked}/></IconSpan> Dashboard</div></NavItem>
                <NavItem id={'expenses'} text='Expenses' icon='fa fa-exchange'/>
            </SideNav>
        );
    }
}

render( <SideNavDemo />, document.getElementById('app'));

