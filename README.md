react-sidenav
==============================
A Simple Side Navigation component written in React

![alt tag](https://raw.githubusercontent.com/wmira/dashboard-sidenav/master/img/sidenav.png)

## Usage

```javascript
var navigation = [
        {id: 'landing', title: 'Dashboard', 'icon-cls': 'fa fa-dashboard'},
        {id: 'channels', title: 'Channels', 'icon-cls': 'fa fa-exchange'},
        {id: 'fleet', title: 'Fleet', 'icon-cls': 'fa fa-truck'},
        {id: 'products', title: 'Products', 'icon-cls': 'fa fa-cubes'},
        {id: 'inventory', title: 'Inventory', 'icon-cls': 'fa fa-database'}
    ];

    React.render(React.createElement(SideNav,{ navigation : navigation}),
            document.getElementById("sidenav-container"));
```

## Pre-Requisite

You need to have a routing library so you can listen to dispatch to clicks. By default the component triggers pushState.

##Todo

1. Themes
2. Events
3. Finish implementation
4. Publish to Bower and npm



