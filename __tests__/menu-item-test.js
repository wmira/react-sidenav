/*globals jest,describe,it,require,expect */
/* jshint -W097,-W055 */
'use strict';


jest.dontMock('../src/sidenav');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var SideNav = require('../src/sidenav');
var domHelper = require("../src/dom-test-helper");


describe('SideNav Tests', function() {

    it ( 'Defaults Selected Item', function() {

        var instance = TestUtils.renderIntoDocument(
            <SideNav.Menu defaultSelected="1">
                <SideNav.MenuItem itemKey="1" >
                    Item1
                </SideNav.MenuItem>
                <SideNav.MenuItem itemKey="2">
                    Item2
                </SideNav.MenuItem>
            </SideNav.Menu>
        );
        var menuItems = TestUtils.scryRenderedComponentsWithType(
            instance, SideNav.MenuItem);

        var item1 = menuItems[0];
        var item2 = menuItems[1];

        //no selection required
        expect(item1.state.isSelected).toBe(true);
        expect(item2.state.isSelected).toBe(false);
    });
    it ( 'Selects Item When Clicked and Un Select Others' ,function() {

        var instance = TestUtils.renderIntoDocument(
            <SideNav.Menu >
                <SideNav.MenuItem itemKey="1" >
                    Item1
                </SideNav.MenuItem>
                <SideNav.MenuItem itemKey="2">
                    Item2
                </SideNav.MenuItem>
            </SideNav.Menu>
        );

        var menuItems = TestUtils.scryRenderedComponentsWithType(
            instance, SideNav.MenuItem);

        var item1 = menuItems[0];
        var item2 = menuItems[1];

        //both false
        expect(item1.state.isSelected).toBe(false);
        expect(item2.state.isSelected).toBe(false);

        //clickit
        TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(item1,'li'));
        expect(item1.state.isSelected).toBe(true);
        expect(item2.state.isSelected).toBe(false);
        TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(item2,'li'));
        expect(item1.state.isSelected).toBe(false);
        expect(item2.state.isSelected).toBe(true);
    });
    it( 'Adds id from prop, when set' ,function () {

        var instance = TestUtils.renderIntoDocument(
            <SideNav.Menu >
                <SideNav.MenuItem id="menu-id" itemKey="1" >
                    Item1
                </SideNav.MenuItem>
                <SideNav.MenuItem itemKey="2">
                    Item2
                </SideNav.MenuItem>
            </SideNav.Menu>
        );

        var menuItems = TestUtils.scryRenderedComponentsWithType(
            instance, SideNav.MenuItem);

        var item1 = menuItems[0];
        var item2 = menuItems[1];

        expect(TestUtils.findRenderedDOMComponentWithTag(item1,'li').getDOMNode().id).toEqual('menu-id');
        expect(TestUtils.findRenderedDOMComponentWithTag(item2,'li').getDOMNode().id).toEqual('');

    });
});
