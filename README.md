react-sidenav
==============================

[![Build Status](https://travis-ci.org/wmira/react-sidenav.svg?branch=master)](https://travis-ci.org/wmira/react-sidenav)

A React Component that makes it easier to automatically build vertical nav menus or compose them from within your React
components.

[Please check the demo here](http://wmira.github.io/react-sidenav/).

![alt tag](https://raw.githubusercontent.com/wmira/dashboard-sidenav/master/img/sidenav.png)

## Usage

```
    npm install --save-dev react-sidenav
    
```


1.CSS - you would need to set a css to style the navigation. A sample is included under css/default.css. The
default top level classname is "sidenav". You should be able to change the style using the "className" property. This
enable you to use the same instance with different style.

2.Via Configuration - you can create a sidenav instance using a navigation configuration as per below:

```javascript
var SideNav = require("react-sidenav");

var nav = [
        {key: 'landing', title: 'Dashboard', 'iconClassName': 'fa fa-dashboard'},
        {key: 'channels', title: 'Channels', 'iconClassName': 'fa fa-exchange'},
        {key: 'fleet', title: 'Fleet', 'iconClassName': 'fa fa-truck'},
        {key: 'products', title: 'Products', 'iconClassName': 'fa fa-cubes'},
        {key: 'inventory', title: 'Inventory', 'iconClassName': 'fa fa-database'}
    ];
    React.render(
            <SideNav className={"plain"} itemType="righticon" itemHeight="32px" navigation={nav}></SideNav>,
            document.getElementById("content-wrapper")
    )

```

3.Via Manual Composition - this is another option. The tree should be as follows:

```javascript
    var SideNav = require("react-sidenav");
    React.render(
            <SideNav.Menu itemHeight="32px" >
                <SideNav.MenuItem itemKey="truck">
                    <SideNav.ILeftItem className="fa fa-truck">
                        Truck
                    </SideNav.ILeftItem>
                </SideNav.MenuItem>
                <SideNav.MenuItem itemKey="bed">
                    <SideNav.ILeftItem className="fa fa-bed">
                        Bed
                    </SideNav.ILeftItem>
                </SideNav.MenuItem>
                <SideNav.MenuItem itemKey="camera">
                    <SideNav.ILeftItem className="fa fa-camera">
                        Camera
                    </SideNav.ILeftItem>
                </SideNav.MenuItem>
            </SideNav.Menu>,
           document.getElementById("sidenav-container")
        );
    

```

## Props

SideNav props accepts the following values

| Property      | Description   | Example  |
| ------------- |:-------------:| -----:|
| path          | The path appended to the key. e.g. path='#' will create data-path or href to be '#/item-key' | # |
| itemHeight    | The height of the row/menu item.      |   42px |
| setHref       | Sets the href attribute in the a tag. True by default.     |  false |
| onClick       | Function to call when an item is clicked | function() |


## Todo

1. SubMenu tests

## Development

react-sidenav uses webpack and jest for testing. You can use whatever hot reload library you preferred and below are the
scripts to do continuous integration.

1. npm install
2. npm install -g live-server # optional, you can use your own
3. live-server # this loads index.html to view development result
4. npm run watch #rebuilds react-sidenav
5. npm run dist #runs the tests and all minification
6. npm test #runs all the tests 
7. npm test testfile.js #run specific tests

## Contributing

Pull requests are welcome. For me to accept a pull request, please include a test as well under \_\_tests\_\_ or your
pull request will be ignored.

## License

MIT
