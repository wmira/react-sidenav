import * as React from 'react'
import { ISideNavContext } from './types/ISideNavContext';

import { template } from './templates/Basic'
import { baseTheme } from './theme'
const { Provider, Consumer }= React.createContext<ISideNavContext>({
    selectedPath: '',
    template,
    theme: baseTheme
})

export { Provider }
export { Consumer }
