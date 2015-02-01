'use strict';

jest.dontMock('../src/sidenav');
jest.dontMock('../src/dom-test-helper');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var SideNav = require('../src/sidenav');

var domHelper = require("../src/dom-test-helper");

describe('SideNav Auto Build Test', function() {

    var nav = [
        {key: 'landing', title: 'Dashboard', 'iconClassName': 'fa fa-dashboard'},
        {key: 'channels', title: 'Channels', 'iconClassName': 'fa fa-exchange'},
        {key: 'fleet', title: 'Fleet', 'iconClassName': 'fa fa-truck'}
    ];
    
    var buildTester = function(itemType,itemTypeStr,comp) {
        
        return function() {
            var i,menuItem,menuItemInstance;
            

            var instance = TestUtils.renderIntoDocument(
                <SideNav className={"plain"} itemType={itemType} itemHeight="32px" navigation={nav}></SideNav>,
                document.getElementById("content-wrapper")
            );

            var mainUl = TestUtils.findRenderedDOMComponentWithTag(
                instance, 'ul');
            
            
            //default styles, ensure its the same as manual build
            var ulNode =  mainUl.getDOMNode();
            expect(ulNode.className).toBe("plain");
            domHelper.expectStyles(ulNode,
                { "listStyle" : "none" , "margin"  : "0px", "padding" : "0px"});

            //traverse, look for 3 children
            var menuItems = TestUtils.scryRenderedComponentsWithType(
                instance, SideNav.MenuItem);

            expect(menuItems.length).toEqual(3);

            //now ensure that our type is LeftIcon
            for ( i =0; i <  menuItems.length; i++ ) {
                menuItem = menuItems[i];
                menuItemInstance = TestUtils.findRenderedComponentWithType(
                    menuItem, comp);
                expect( menuItemInstance.constructor.displayName ).toBe(itemTypeStr);
            }
        }
        
    };
    
    it('Builds Side Nav from Config - IconLeftItem',buildTester("lefticon","IconLeftItem",SideNav.ILeftItem));
    it('Builds Side Nav from Config - IconRightItem',buildTester("righticon","IconRightItem",SideNav.IRightItem));
});