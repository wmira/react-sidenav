# react-sidenav

Side Navigation Component for React

![alt tag](https://raw.githubusercontent.com/wmira/react-sidenav/master/sidenav.png)

## Usage

Install via npm

```shell
npm install --save-dev react-sidenav
```

Then import it using es6 modules

```javascript
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

const MySideNav = () => (
    <SideNav highlightBgColor='#00bcd4' defaultSelected='sales'>
       
        <Nav id='dashboard'>
            <NavIcon><Icon20 icon={ic_aspect_ratio}/></NavIcon><NavText> Dashboard </NavText>
        </Nav>
        <Nav id='sales'>
            <NavIcon><Icon20 icon={ic_business}/></NavIcon><NavText> Sales </NavText>
        </Nav>
    </SideNav>
)

```

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

