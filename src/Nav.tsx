import * as React from 'react'

import { SideNavContext, ISideNavContext, SideNavActionContext } from './index'
import { NavGroup } from './NavGroup';
import { ViewMode } from './types';

const PATH_SEPARATOR = '|'


interface INavProps<P ={}> {
  id: string
  payload?: P
}

interface INavContext {
  selected: boolean
  id: string
  pathId: string
  level: number
  isLeaf: boolean;
}
export const NavContext = React.createContext(null as any as INavContext)


const splitPath = (path: string): string[] => {
  if ( path ) {
    return path.split(PATH_SEPARATOR)
  }
  return []
}

const isSelectedPath = (contextPath: string, selection: string) => {
  const ourPath = splitPath(contextPath)
  const selectionPath = splitPath(selection)

  if ( selectionPath.length === 0 || selectionPath.length !== ourPath.length ) {
    return false
  }
  for ( let i=0; i < selectionPath.length; i++ ) {
    if ( selectionPath[i] !== ourPath[i] ) {
      return false
    }
  }
  return true
}
const isSelected = (context: ISideNavContext, parentContext: INavContext | null, id: string) => {
  const selectionPath = context ? context.selectedPath : ''
  const parentPathId =  parentContext ? `${parentContext.pathId}` : undefined

  const result =  isSelectedPath(parentPathId ? `${parentPathId}${PATH_SEPARATOR}${id}` : id, selectionPath)

  return result
}

const createPathId = (context: INavContext | null, id: string) => {

  if ( context ) {
    return `${context.pathId}${PATH_SEPARATOR}${id}`
  }
  return id

}

function hasNavChildren(props: React.Props<any>) {
  const children = React.Children.toArray(props.children)
  for ( const childEl of children ) {
    const child = childEl as React.ReactElement<any>
    if ( child.type === Nav ) {
      return true
    }
  }
  return false
}

export const Nav: React.FC<INavProps> = (props) => {

  const context = React.useContext(SideNavContext)

  const contextAction = React.useContext(SideNavActionContext)
  const parentNavContext = React.useContext(NavContext)
  const selected = isSelected(context, parentNavContext, props.id)
  const pathId = createPathId(parentNavContext, props.id)

  const level = pathId.split(PATH_SEPARATOR).length
  const hasNavAsChildren = hasNavChildren(props)
  const isLeaf = !hasNavAsChildren

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    if ( context.mode === ViewMode.normal ) {
      e.stopPropagation()
    }
    contextAction.onSelectionPathSelected(pathId, { id: props.id, isLeaf, payload: props.payload, level })
  }

  const elementToCreate = isLeaf ? 'div' : NavGroup
  const containerProps = {
    'data-level': `${level}`,
    'data-isleaf': `${isLeaf}`,
    'data-id': `${props.id}`,
    'data-pathid': `${pathId}`,
    'data-testid': `${pathId}`,
    children: props.children,
    onClick
  } as any

  if ( isLeaf ) {
    containerProps['data-selected'] =  selected;
  }

  return (
    <NavContext.Provider
      value={{
        selected,
        id: props.id,
        pathId,
        level,
        isLeaf
      }}>
      { React.createElement(elementToCreate, containerProps ) }
    </NavContext.Provider>
  )
}
