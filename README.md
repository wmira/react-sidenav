# react-sidenav

[![npm version](https://badge.fury.io/js/react-sidenav.svg)](https://badge.fury.io/js/react-sidenav)

Side Navigation Component for React

![alt tag](https://raw.githubusercontent.com/wmira/react-sidenav/master/sidenav.png)

## Usage

Install via npm

```shell
npm install --save-dev react-sidenav
```

Then import it using es6 modules

```javascript
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

//specify the base color/background of the parent container if needed
const MySideNav = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
            <Nav id='dashboard'>
                <NavIcon><Icon20 icon={ic_aspect_ratio}/></NavIcon><NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><Icon20 icon={ic_business}/></NavIcon><NavText> Sales </NavText>
            </Nav>
        </SideNav>
    </div>
)

```

## Item Selection

To highlight any item selected, you can either let the SideNav instance manage it by specifying **defaultSelected** property,
or by passing **selected** property. If you pass the selected property then the SideNav is in what we say stateless mode.


```javascript
//managed SideNav, state is handled within the component
<SideNav defaultSelected='xyz'>
  ...
</SideNav>
```

```javascript
//stateless SideNav, state is handled within the component
<SideNav selected='xyz'>
  ...
</SideNav>
```

### Listening to item change

Register an **onItemSelection** props

```javascript
<SideNav selected='xyz' onItemSelection={ (id, parent) => {}}>
  ...
</SideNav>
```

If its a top level nav, then parent is null.

## Examples

The source code for the screenshot is under playground/index.js


## Development

1. Clone the repo
```shell
git clone https://github.com/wmira/react-sidenav.git
```

2. Run npm install
```shell
cd react-sidenav
npm install
```
3. Run playground script. The script below starts the dev server on port 8080.
```shell
npm run playground -- playground/index.js
```
To change the port, pass --port
```shell
npm run playground -- --port=8181 playground/index.js
```
