
import { Nav } from './Nav'
import { ReactNode } from 'react';


export const isNavType = <P = any>(child: ReactNode ) => {
  const asReactElement = child as React.ReactElement<P>
  return Boolean(asReactElement && asReactElement.type === Nav)
}
