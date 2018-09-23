import * as React from 'react'
import { ISideNavContext } from './types/ISideNavContext';

import { template } from './template'
import { Scheme } from 'react-sidenav/types/Scheme';
const { Provider, Consumer }= React.createContext<ISideNavContext>({
    selectedPath: '',
    template,
    theme: {},
    scheme: Scheme.default
})

export { Provider }
export { Consumer }
