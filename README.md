# react-sidenav

[![Build Status](https://gitlab.com/wmira/react-sidenav/badges/master/build.svg)](https://gitlab.com/wmira/react-sidenav/pipelines)[![coverage report](https://gitlab.com/wmira/react-sidenav/badges/master/coverage.svg)](https://gitlab.com/wmira/react-sidenav/commits/master)
[![npm version](https://badge.fury.io/js/react-sidenav.svg)](https://badge.fury.io/js/react-sidenav)

Side Navigation Component for React

![Alt vmware](https://github.com/wmira/react-sidenav/blob/master/sidenav.png)

# Getting Started

**react-sidenav** 4.0 will not be backwards compatible and would need 

## Requirements

**react-sidenav** are exported as an es module thus you would need a bundler to use it. It is also written in
Typescript so it can be directly used with a typescript project as well.

## Examples

1. https://codesandbox.io/s/q9851xoymj
2. https://codesandbox.io/dashboard/sandboxes/react-sidenav


### Dependencies

The following are peer dependencies of **react-sidenav**. You would need to have the following installed:

It needs React 16

### Basic Usage 

At a minimum, SideNav can be used as per the example below. You can render any item you want.

```javascript

    import { SideNav, Nav } from 'react-sidenav'

    const Navigation = () => (
        <SideNav>
            <Nav id="1">Item 1</Nav>
            <Nav id="2">Item 2</Nav>
            <Nav id="3">Item 3</Nav>
        </SideNav>
    )

```

```javascript

    import { SideNav, Nav } from 'react-sidenav'

    const Navigation = () => (
        <SideNav>
            <Nav id="1">
                <Icon icon={item1}/>
                Item 1
            </Nav>
            <Nav id="2">
                <Icon icon={item2}/>
                Item 2
            </Nav>
            <Nav id="3">
                <Icon icon={item2}/>
                Item 3
            </Nav>
        </SideNav>
    )

```

For stateless mode, you can add a listener and set the value on selectedPath attribute

```javascript
class Navigation extends React.Component {

    state = { selectedPath: '' }

    onItemSelection = (arg) => {
        this.setState({ selectedPath: arg.path })
    }

    render() {

        return (
            <SideNav 
                selectedPath={this.state.selectedPath} 
                onItemSelection={this.onItemSelection}>
                <Nav id={'1'}>1</Nav>
                <Nav id={'2'}>2</Nav>
            </SideNav>
        )
    }

}

```

### SideNav Properties

| property   |      type      |  description |  isRequired |
|------------|-------------:|------:|-----------------------|
| onSelection | function: ({id, path, payload}) => void | a function that gets called when a navigation has been clicked | false |
| 


### Nav Properties

| property   |      type      |  description |  isRequired |
|------------|-------------:|------:|-----------------------|
| id | | a function that gets called when a navigation has been clicked | true |
| payload | any | passed to the listener when this nav is clicked  | false |
| className | string | the class name to assign to this nav's container | false |
| style | css attribs object | The style to assign to this nav's container | false |


# Development

Please checkout example on CodeSandbox and the src/playground directory for now while
all the documentation/testing is being completed.
