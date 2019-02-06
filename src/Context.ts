import * as React from 'react'
import { ISideNavContext } from './types/ISideNavContext';

import { item, children } from './template/Default'
import { Scheme } from 'react-sidenav/types/Scheme';

const { Provider, Consumer } = React.createContext<ISideNavContext>({
    selectedPath: '',
    template: { item, children },
    theme: {},
    scheme: Scheme.default
})

export { Provider }
export { Consumer }
