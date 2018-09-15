import * as React from 'react'
import { ISideNavContext } from './types/ISideNavContext';
import { BasicTemplate, BasicTheme } from './BasicTemplate';

const { Provider, Consumer }= React.createContext<ISideNavContext>({    
    selectedPath: '',
    navTemplate: BasicTemplate,
    theme: BasicTheme
})

export { Provider }
export { Consumer }
