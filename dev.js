
import React from 'react';
import { render } from 'react-dom';
import { SideNav, Nav } from 'react-sidenav';


var navi = [
    { id: 'dashboard', icon: 'fa fa-dashboard' , text: 'Dashboard'},
    { id: 'products', icon: 'fa fa-cube', text: 'Products' ,
        navlist: [
          { icon: 'fa fa-desktop', id: 'manage' ,text: 'Manage Product' },
          { icon: 'fa fa-cog', id: 'suppliers' ,text: 'Suppliers' }
        ]
    },
    { id: 'inventory', icon: 'fa fa-database' ,text: 'Inventory'},
    { id: 'deliveries', icon: 'fa fa-truck' ,text: 'Deliveries'},
    { id: 'reports', icon: 'fa fa-bar-chart' ,text: 'Reports' }
];

var selected = 'dashboard';
const updateSelection = (e) => {
    selected = e.id;
    renderUI();
};

const renderUI = function() {
    render(
        <div>
            <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
                <SideNav navtype='icon-left' selected={selected} navs={navi} onSelection={updateSelection}/>
            </div>
            <br/>
            <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
                <SideNav navtype='icon-right' selected={selected} navs={navi} onSelection={updateSelection}/>
            </div>
            <br/>
            <div style={{background: '#2c3e50', color: '#FFF', width: 220}}>
                <SideNav selected='nav1'>
                    <Nav id='nav1' text='Nav1'/>
                    <Nav id='nav2' text='Nav2'/>
                </SideNav>
            </div>
        </div>,
    document.getElementById('app'));
};

renderUI();
