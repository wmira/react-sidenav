import * as React from 'react'

interface ISvgIconProp {
  size?: number
  onClick?: (e: React.MouseEvent) => void
}

export const createSvgIconFromPath = (path: string) => {

  return (props: ISvgIconProp) => {
    const { size, ...others} = props
    return (
      <i {...others}>
        <svg style={{
          width: size || 24,
          height: size || 24,
        }}
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        >
          <path d={`${path}`} />
        </svg>
      </i>
    )
  }
}

export const MenuIcon = createSvgIconFromPath("M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z")