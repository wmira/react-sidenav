react-sidenav
==============================

A React Component that makes it easier to automatically build vertical nav menus or compose them from within your React
components.

Please check the demo here.

![alt tag](https://raw.githubusercontent.com/wmira/dashboard-sidenav/master/img/sidenav.png)

## Usage

```
    npm install --save-dev react-sidenav
    
```


1. CSS - you would need to set a css to style the navigation. A sample is included under css/default.css. The
default top level classname is "sidenav". You should be able to change the style using the "className" property. This
enable clients to use sidenav with different styles.

2. Via Configuration - you can create a sidenav instance using a navigation configuration as per below:

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

3. Via Manual Composition - this is another option. The tree should be as follows:

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


## Todo

1. Events and URL History interaction
2. SubMenu tests

## Development

react-sidenav uses webpack and jest for testing. You can use whatever hot reload api you want and below are the
scripts to do continuous integration.

1. npm install
2. npm install -g live-server # optional, you can use your own
3. live-server # this loads index.html to view development result
4. npm run watch #rebuilds react-sidenav


## Contributing

Pull requests are welcome. For me to accept a pull request, please include a test as well under __tests__ or your
pull request will be ignored.

## License

MIT
