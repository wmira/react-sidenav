
import { Nav } from './Nav'
import { ReactElement } from 'react';

export const isNavType = (child: ReactElement<any> | undefined ) => Boolean(child && child.type === Nav)
