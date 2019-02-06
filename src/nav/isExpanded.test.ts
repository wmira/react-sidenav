
import { isExpanded } from './isExpanded'
import { PATH_SEPARATOR } from 'react-sidenav/constants';

describe('isExpanded', () => {

    it('returns true if selectedPath is the parent of parentId', () => {
        expect(isExpanded('x',`x${PATH_SEPARATOR}y`)).toBe(true)
    })
    it('returns false when path is from another parent', () => {
        expect(isExpanded('x',`z${PATH_SEPARATOR}1`)).toBe(false)
    })
    it('does not die if paths and selection is empty', () => {
        expect(isExpanded(undefined!, undefined!)).toBe(false)
        expect(isExpanded('abc', undefined!)).toBe(false)
    })
})