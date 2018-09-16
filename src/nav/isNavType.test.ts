import { isNavType } from './isNavType'
import { INavProp } from '../types';
import { Nav } from './Nav'

describe('isNavType', () => {
    it('returns true if type of Element is Nav', () => {
        expect(isNavType({ type: Nav, props: {}, key: '' } as React.ReactElement<INavProp> )).toBe(true)
    })
    it('returns false if arg is falsy', () => {
        expect(isNavType(undefined)).toBe(false)
    })
})