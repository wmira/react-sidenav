


import * as React from 'react'
import { render } from 'react-dom'


import { Simple } from 'react-sidenav/playground/simple/Simple';

import { init } from '../init'

init()

const RenderItems = () => (
    <>
      <Simple />
    </>
)


const start = (): void => {
    render(<RenderItems />, document.getElementById('app'));
}


document.addEventListener("DOMContentLoaded", start)
