# react-sidenav

[![Build Status](https://gitlab.com/wmira/react-sidenav/badges/master/build.svg)](https://gitlab.com/wmira/react-sidenav/pipelines)
[![coverage report](https://gitlab.com/wmira/react-sidenav/badges/master/coverage.svg)](https://gitlab.com/wmira/react-sidenav/commits/master)
[![npm version](https://badge.fury.io/js/react-sidenav.svg)](https://badge.fury.io/js/react-sidenav)

Side Navigation Component for React

![Alt Img](https://github.com/wmira/react-sidenav/blob/master/sidenav.png)

## Requirements

**react-sidenav** are exported as an es module thus you would need a bundler to use it. It is also written in
Typescript so it can be directly used with a typescript project as well.

### Peer Dependencies

**React 16.8**

### NavContext 

As the current version of react-sidenav does not have any fixed rendering template,
the user is free to render Nav items as they see fit. To render conditionally an item can get the context which contains 
the following attributes:

| property   |      type      |  description |
|------------:|-------------:|------:|
| selected | boolean  | if this Nav item is selected |
| id | string  | the id of the Nav as per props.id |
| pathId | string  | The path id, will be parentId|props.id if rendered with a parent |
| level | number  | The level of the Nav, starts with 1 |
| isLeaf | boolean  | If true, then this Nav has no children |

Below is an example on how to use it.

```javascript
    const Item = () => {
      const context = React.useContext(NavContext);
      return (
        <div style={{ color: context.selected: 'pink': 'inherit'}}>{ props.children }</div>
      )
    }
  
    <SideNav>
      <Nav id="1">
        <Item>Link 1</Item>
      </Nav>
      <Nav id="2">
        <Item>Link 2</Item>
      </Nav>
      <Nav id="3">
        <Item>Link 3</Item>
      </Nav>
    </SideNav>
  

```
### SideNav Properties

| property   |      type      |  description |  isRequired |
|------------|-------------:|------:|-----------------------|
| onSelection | function: ({id, path, payload}) => void | a function that gets called when a navigation has been clicked | false |
| defaultSelectedPath | string | the default selection | false |
| mode | compact, normal | changes rendering style of children | false, defaults to normal |
| childrenToggleMode | hover, click | changes how children are expanded | false, defaults to hover |
| childrenToggleIndicator | React Component | the toggle indicator to render. The collapse, expand state is passed or you can use the NavGroupContext to get the collapse/expand state | false |


### Nav Properties

| property   |      type      |  description |  isRequired |
|------------|-------------:|------:|-----------------------|
| id | | a function that gets called when a navigation has been clicked | true |
| payload | any | passed to the listener when this nav is clicked  | false |


# Development

Please checkout example on CodeSandbox and the src/playground directory for now while
all the documentation/testing is being completed.

# Sponsors
[![JetBrains](https://github.com/wmira/react-sidenav/raw/master/jetbrains.png)](https://www.jetbrains.com/?from=react-sidenav)
