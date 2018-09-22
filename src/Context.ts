import * as React from 'react'
import { ISideNavContext } from './types/ISideNavContext';

import { template } from './template'
import { baseTheme } from './theme'
import { Scheme } from 'react-sidenav/types/Scheme';
const { Provider, Consumer }= React.createContext<ISideNavContext>({
    selectedPath: '',
    template,
    theme: baseTheme,
    scheme: Scheme.default
})

export { Provider }
export { Consumer }
