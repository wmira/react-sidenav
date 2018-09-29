


import * as React from 'react'
import { render } from 'react-dom'


import { Simple } from 'react-sidenav/playground/Simple';

import { init } from 'react-sidenav/playground/init'
import { WithIcons } from 'react-sidenav/playground/WithIcons';
import { NavTextAndIcon } from 'react-sidenav/playground/NavTextAndIcon';
import styled from 'styled-components';

init()

const Flex = styled.div`

    display: flex;
`
const FlexItem = styled.div`
    padding: 6px;
`

const RenderItems = () => (
    <Flex>
      <FlexItem><Simple /></FlexItem>
      <FlexItem><WithIcons /></FlexItem>
      <FlexItem><NavTextAndIcon /></FlexItem>
    </Flex>
)


const start = (): void => {
    render(<RenderItems />, document.getElementById('app'));
}


document.addEventListener("DOMContentLoaded", start)
