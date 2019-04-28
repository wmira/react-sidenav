

import * as React from 'react'

export interface ISvgComponentProp {
  size?: number | string
  path: string

}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

const SvgIcon: React.FC<ISvgComponentProp> = props => (
  <svg
    fill="currentColor"
    style={{
      width: props.size || 24,
      height: props.size || 24,
    }}
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path d={props.path} />
  </svg>
)

export default SvgIcon

export type IIconProp = Omit<ISvgComponentProp, 'path'>
export const createIcon = (path: string): React.FC<{ size?: number | string }> => {

  return (props: IIconProp) => {
    return (
      <i><SvgIcon {...props} path={path} /></i>
    )
  }
}

export const Icon1 = createIcon("M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.5 2.54l2.62 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95M12 19a7 7 0 0 1-7-7c0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95a10 10 0 0 0 10 10c3.3 0 6.23-1.61 8.05-4.09l-2.6-1.53A6.89 6.89 0 0 1 12 19z")
export const Icon2 = createIcon("M15 4a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8m0 14a6 6 0 0 0 6-6 6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6M3 12a5.99 5.99 0 0 0 4 5.65v2.09c-3.45-.89-6-4.01-6-7.74 0-3.73 2.55-6.85 6-7.74v2.09C4.67 7.17 3 9.39 3 12z")
export const Icon3 = createIcon("M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z")