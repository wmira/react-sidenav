react-sidenav
==============================

[![Build Status](https://travis-ci.org/wmira/react-sidenav.svg?branch=master)](https://travis-ci.org/wmira/react-sidenav)

A React Component that makes it easier to automatically build vertical nav menus or compose them from within your React
components.

![alt tag](https://raw.githubusercontent.com/wmira/react-sidenav/master/sidenav.png)

## Usage

```
    npm install --save-dev react-sidenav

```

1.Via Configuration - you can create a sidenav instance using a navigation configuration as per below:

```javascript
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

//render it
<SideNav selected={selected} navs={navi} onSelection={updateSelection}/>


```

2.Via Manual Composition - this is another option. The tree should be as follows:

```javascript
    var SideNav = require("react-sidenav");
    React.render(
        <SideNav selected='nav1'>
            <Nav id='nav1' text='Nav1'/>
            <Nav id='nav2' text='Nav2'/>
        </SideNav>,
           document.getElementById("sidenav-container")
        );


```

## Props

SideNav props accepts the following values

| Property      | Description   | Example  |
| ------------- |:-------------:| -----:|
| onSelection   | Function called when an item is clicked. |  |
| selected    | String of the selected item.      |    |
| children      | Nav element if via composition |   |
| navs       | nav config if via configuration | |


### onSelection

The SideNav component is stateless. That means that each click will call onSelection
and you need to pass again the new selected props.

```javascript

    const SideNavComponent = Rect.createClass({

        getInitialState() {
            return { selected: 'dashboard' };
        },
        onSelection(selection) {
            this.setState({selected: selection.id});
            //or trigger a dispatch here
        },
        render() {
            return <SideNav selected={this.state.selected} onSelection={this.onSelection} />
        }

    });

```

## Todo

1. Custom Item Renderers
2. Compact
3. Notification

## Development

Edit dev.js and start webpack-dev-server

```console
npm run dev
```



## Contributing

Pull requests are welcome. For me to accept a pull request, please include a test as well under test folder.

## License

MIT
