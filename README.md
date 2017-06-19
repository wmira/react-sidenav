# react-sidenav

[![npm version](https://badge.fury.io/js/react-sidenav.svg)](https://badge.fury.io/js/react-sidenav)
[![Travis](https://travis-ci.org/wmira/react-sidenav.svg?branch=master&style=flat-square)](https://travis-ci.org/wmira/react-sidenav.svg?branch=master)

Side Navigation Component for React

![alt tag](https://raw.githubusercontent.com/wmira/react-sidenav/master/sidenav.png) 


## Usage

Install via npm

```shell
npm install --save react-sidenav
```

Then import it using es6 modules

```javascript
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';


//specify the base color/background of the parent container if needed
const MySideNav = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
            <Nav id='dashboard'>
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> Sales </NavText>
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

### Item Id

Note that a sub nav id only needs to be unique within its siblings. SideNav automatically uses / to identify sub navigation.

Nav id='sales'
  --- Nav id='list'

We can select list by setting the selected property to 'sales/list'


### Listening to item change

Register an **onItemSelection** props

```javascript
<SideNav selected='xyz' onItemSelection={ (id, parent) => {}}>
  <Nav />
  <Nav />
</SideNav>
```

If its a top level nav, then parent is null.

## Props

### SideNav

| Property        | Description           | Type  |
| ------------- |:-------------:| -----:|
| highlightColor      | color when an item is selected | string |
| highlightBgColor      | background color when an item is selected   |   string |
| hoverBgColor | background color on hover. Defaults to highlightBgColor     |    string |
| hoverColor  | color on hover. Defaults to highlightColor or inherit | string |
| selected  | selected item, will be stateless | string |
| defaultSelected  | default id of selected item, will auto manage state | string |
| onItemSelection  | function called when an item is clicked (id, parent) | function |


## React Router 4 Integration

To use with React Router 4, you can use the hoc withRR4 to create a SideNav. Please see playground folder for a full example

```javascript

import { withRR4 } from 'react-sidenav';
import { BrowserRouter as Router } from 'react-router';

const SideNav = withRR4();

export const Side = () => (
    <Router>
        <SideNav>
            //nav items and route will automatically updated upon selection
        </SideNav>
    </Router>
);
```
### NavIcon and NavText

These 2 components now support style and className props


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

## Contributing

Contributions are welcome in any form.
