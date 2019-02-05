import { isNavType } from './isNavType'
import { Nav } from './Nav'

describe('isNavType', () => {
    it('returns true if type of Element is Nav', () => {
        expect(isNavType({ type: Nav, props: { id: 'x', children: 'x' }, key: '' })).toBe(true)
    })
    it('returns false if arg is falsy', () => {
        expect(isNavType(undefined!)).toBe(false)
    })
})