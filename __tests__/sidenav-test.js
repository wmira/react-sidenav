/*globals jest,describe,it,require,expect */
/* jshint -W097,-W055 */
"use strict";



jest.dontMock('../src/sidenav');
jest.dontMock('../src/dom-test-helper');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var SideNav = require('../src/sidenav');

var domHelper = require("../src/dom-test-helper");

describe('SideNav Tests', function() {

    it('test default styles and behavior', function() {

        var props = { "itemHeight" : "32px" };
        
        var instance = TestUtils.renderIntoDocument(
            <SideNav.Menu {...props } >
                <SideNav.MenuItem >
                    Item1
                </SideNav.MenuItem>
            </SideNav.Menu>
        );
        

        var mainUl = TestUtils.findRenderedDOMComponentWithTag(
            instance, 'ul');

        //default styles
        var ulNode =  mainUl.getDOMNode();
        
        expect(ulNode.className).toBe("sidenav");
        
        domHelper.expectStyles(ulNode,
            { "listStyle" : "none" , "margin"  : "0px", "padding" : "0px"});

        //ensure 1 child
        expect(ulNode.childElementCount,1);

        var li = TestUtils.findRenderedDOMComponentWithTag(
            instance, 'li');
        
        //ensure height is still there
        var liNode = li.getDOMNode();
        domHelper.expectStyles(liNode.style,
            { "height" : "32px" });
        
        
        //re-render, set className
        props["className"] = "customClassName";
        instance = TestUtils.renderIntoDocument(
            <SideNav.Menu {...props} >
                <SideNav.MenuItem >
                    Item1
                </SideNav.MenuItem>
            </SideNav.Menu>
        );

        mainUl = TestUtils.findRenderedDOMComponentWithTag(
            instance, 'ul');
        ulNode =  mainUl.getDOMNode();

        expect(ulNode.className).toEqual("customClassName");
    });

    it('overrides selected classname', function() {

        var props = { "itemHeight" : "32px", className : "hey"  };

        var instance = TestUtils.renderIntoDocument(
            <SideNav.Menu {...props } >
                <SideNav.MenuItem >
                {"Item1"}
                </SideNav.MenuItem>
            </SideNav.Menu>
        );


        var menuItem = TestUtils.findRenderedComponentWithType(
            instance, SideNav.MenuItem);

        expect(menuItem.props.selectedClassName).toBe("hey-selected");
    });

});


describe('SideNav Path Tests', function() {

    it('properly builds path', function() {

        var props = { "itemHeight" : "32px" };

        var instance = TestUtils.renderIntoDocument(
            <SideNav.Menu path='#' {...props } >
                <SideNav.MenuItem itemKey='hey' >
                    <SideNav.ILeftItem className="fa fa-truck">
                        Truck
                    </SideNav.ILeftItem>
                </SideNav.MenuItem>
            </SideNav.Menu>
        );

        var menuItem = TestUtils.findRenderedComponentWithType(
            instance, SideNav.MenuItem);

        var a = TestUtils.findRenderedDOMComponentWithTag(
            menuItem, 'a');
        
        var aDomNode = a.getDOMNode();

        expect(aDomNode.getAttribute("href")).toBe("#/hey");
        expect(aDomNode.getAttribute("data-path")).toBe("#/hey");
        
    });

    it("properly doesn't set path if configured", function() {

        var props = { "itemHeight" : "32px" };

        var instance = TestUtils.renderIntoDocument(
            <SideNav.Menu setHref={false} path='#' {...props } >
                <SideNav.MenuItem itemKey='hey' >
                    <SideNav.ILeftItem className="fa fa-truck">
                        Truck
                    </SideNav.ILeftItem>
                </SideNav.MenuItem>
            </SideNav.Menu>
        );

        var menuItem = TestUtils.findRenderedComponentWithType(
            instance, SideNav.MenuItem);

        var a = TestUtils.findRenderedDOMComponentWithTag(
            menuItem, 'a');

        var aDomNode = a.getDOMNode();

        expect(aDomNode.getAttribute("href")).toBe(null);
        expect(aDomNode.getAttribute("data-path")).toBe("#/hey");

    });
});