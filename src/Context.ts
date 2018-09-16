import * as React from 'react'
import { ISideNavContext } from './types/ISideNavContext';

import { template } from './templates/Basic'

const { Provider, Consumer }= React.createContext<ISideNavContext>({
    selectedPath: '',
    template
})

export { Provider }
export { Consumer }
