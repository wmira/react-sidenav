import * as React from 'react'
import { ISideNavContext } from './types/ISideNavContext';

import { template, theme } from './templates/Basic'

const { Provider, Consumer }= React.createContext<ISideNavContext>({
    selectedPath: '',
    template,
    theme
})

export { Provider }
export { Consumer }
