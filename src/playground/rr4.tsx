
import * as React from "react";
import { withRR4 } from "react-sidenav/withRR4";
import { Nav } from "react-sidenav";
import { init } from './init'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { render } from 'react-dom'

const theme = {
  hoverBgColor: "#f5f5f5",
  selectionBgColor: "#f5f5f5",
  selectionIconColor: "#03A9F4"
};

const SideNav = withRR4();

export class AppNavigation extends React.Component {
  public render() {
    return (
      <SideNav basePath='/' theme={theme} defaultSelectedPath={"home"}>
        <Nav id="home">
          <div>Home</div>
        </Nav>
        <Nav id="link1">
          <div>Link 1</div>
        </Nav>
        <Nav id="link2">
          <div>Link 2</div>
        </Nav>
      </SideNav>
    );
  }
}



init()

const Home = () => (<div>Home</div>)
const Link1 = () => (<div>Link1</div>);
const Link2 = () => (<div>Link2</div>);

const RenderItems = () => (
    <Router>
      <div>
        <AppNavigation/>
        <Route path="/" exact={true} component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/link1" component={Link1} />
        <Route path="/link2" component={Link2} />
      </div>
    </Router>
)


const start = (): void => {
    render(<RenderItems />, document.getElementById('app'));
}


document.addEventListener("DOMContentLoaded", start)
