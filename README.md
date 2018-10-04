# react-sidenav

[![Build Status](https://gitlab.com/wmira/react-sidenav/badges/master/build.svg)](https://gitlab.com/wmira/react-sidenav/pipelines)[![coverage report](https://gitlab.com/wmira/react-sidenav/badges/master/coverage.svg)](https://gitlab.com/wmira/react-sidenav/commits/master)
[![npm version](https://badge.fury.io/js/react-sidenav.svg)](https://badge.fury.io/js/react-sidenav)

Side Navigation Component for React

# Getting Started

**react-sidenav** version is 3 is a complete rewrite of the react-sidenav library. The main intention
of the re-write is to be able to make the rendering of the navigation items non opinionated.

This will make it possible to render anything while the library takes care of handling the switching/rendering
logic within the component.

As such, **react-sidenav** aims to be a  library and can be used to build any side navigation component.

## Requirements

**react-sidenav** are exported as an es module thus you would need a bundler to use it. It is also written in
Typescript so it can be directly used with a typescript project as well.

## Examples

https://codesandbox.io/dashboard/sandboxes/react-sidenav


### Dependencies

The following are peer dependencies of **react-sidenav**. You would need to have the following installed:

```react```
```react-dom```
```styled-components```

### Basic Usage 

At a minimum, SideNav can be used as per the example below. You can render any item you want.

```javascript

    import { SideNav, Nav } from 'react-sidenav'

    const Navigation = () => (
        <SideNav defaultSelectedPath="1">
            <Nav id="1">Item 1</Nav>
            <Nav id="2">Item 2</Nav>
            <Nav id="3">Item 3</Nav>
        </SideNav>
    )

```

```javascript

    import { SideNav, Nav } from 'react-sidenav'

    const Navigation = () => (
        <SideNav defaultSelectedPath="1">
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
| onItemSelection | function: ({id, path, payload}) => void | a function that gets called when a navigation has been clicked | false |
| selectedPath | string | the identifier of the selection. Note that if your navigation is only 1 level then this just corresponds to an id.  | false |
| defaultSelectedPath | string | SideNav component will manage state. Use defaultSelectedPath to set initial active item | false |
| theme | INavTheme | The theme used by templates for colors etc | false |
| template | ITemplate | The template defines which Elements gets rendered. Defaults are used and you can use this to customize how navigations are rendered. More below | false |
| scheme | Scheme | used to customize template behavior | false |
| expandOnHover | boolean | expand a submenu on hover. defaults to false | false |


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
