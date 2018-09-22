


import * as React from 'react'
import { render } from 'react-dom'

import { SideNavView } from 'react-sidenav/playground/SideNavView'

import styled from 'styled-components'

import { init } from './init'

init()



const SideNavDarkBg = styled(SideNavView)`
  background: #2B333E;
`

const RenderItems = () => (
    <>

    </>
)
{/* <View><SideNavView sidenav={TextOnly}/></View>
        <View><SideNavDarkBg sidenav={WithTextAndIcons}/></View>
        <CompactView><SideNavDarkBg sidenav={IconsOnly}/></CompactView> */}
{/* <View><SideNavView sidenav={Custom}/></View>
<View><SideNavView bgColor={'#2B333E'} sidenav={WithTextAndIcons}/></View>
<View><SideNavWithRouterView /></View> */}

const start = (): void => { // effect much
    render(<RenderItems />, document.getElementById('app'));
}


document.addEventListener("DOMContentLoaded", start)
