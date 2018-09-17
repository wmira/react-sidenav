# react-sidenav

Side Navigation Component for React

*react-sidenav v3 is a complete rewrite and would not be backwards compatible*

# Getting Started

**react-sidenav** version is 3 is a complete rewrite of the react-sidenav library. The main intention
of the re-write is to be able to make the rendering of the navigation items non opinionated.

This will make it possible to render anything while the library takes care of handling the switching/rendering
logic within the component.

As such, **react-sidenav** aims to be a  library and can be used to build any side navigation component.

## Requirements

**react-sidenav** are exported as an es module thus you would need a bundler to use it. It is also written in
Typescript so it can be directly used with a typescript project as well.

### Dependencies

The following are peer dependencies of **react-sidenav**. You would need to have the following installed:

```react```
```react-dom```
```styled-components```

### Importing 

At a minimum, SideNav can be used as per the example below:

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

# Development

Please checkout example on CodeSandbox and the src/playground directory for now while
all the documentation/testing is being completed.

https://codesandbox.io/s/1r9l3n49mq
https://github.com/wmira/react-sidenav/tree/ts16/src/playground

