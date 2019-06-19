import * as React from 'react'
import { SideNavContext } from './SideNav'
import { INavGroupChildrenProp, ViewMode, NavGroupState } from './types'
import { createPortal } from 'react-dom'

const StyleCollapsed = Object.freeze({
  maxHeight: 0,
  transition: 'max-height 0.3s ease-out',
  overflow: 'hidden',
})
const StyleExpanded = Object.freeze({
  overflow: 'hidden',
  maxHeight: '1000px',
  transition: 'max-height 0.5s ease-in'
})

export const NavGroupChildren: React.FC<INavGroupChildrenProp> = (props) => {
  const context = React.useContext(SideNavContext)

  React.useEffect(() => {
    let eventListener: any;

    if ( context.mode === ViewMode.compact ) {
      eventListener = () => {
        props.toggleCollapsed()
      }
      window.addEventListener('click', eventListener)
    }
    return () => {
      if ( eventListener ) {
        window.removeEventListener('click', eventListener)
      }
    }
  }, [props.toggleCollapsed, context.mode ])

  if ( context.mode === ViewMode.compact ) {
    if ( props.state === NavGroupState.expanded ) {
      const { current } = props.rootRef

      if ( current ) {
        const boundingRect = current.getBoundingClientRect();
        return (
            <CompactNavGroupChildrenCont>
              <div
                style={{
                  marginLeft: 2,
                  background: current ? current.style.background: '#FFF',
                  position: 'absolute',
                  zIndex: 99999,
                  left: boundingRect.right,
                  top: boundingRect.top } as any}>
                { props.children }
              </div>
          </CompactNavGroupChildrenCont>
        )
      }
      return null
    }
  } else {

    const style = props.state === NavGroupState.collapsed ? StyleCollapsed : StyleExpanded
    return (
      <div
        data-navgroupstate={props.state}
        style={style}>
        { props.children }
      </div>
    )
  }

  return null;
}

const mountPoint = document.createElement('div')
document.body.appendChild(mountPoint)
/**
 * Render on body
 */
const CompactNavGroupChildrenCont: React.FC = (props) => {

  return createPortal(props.children, mountPoint)

}