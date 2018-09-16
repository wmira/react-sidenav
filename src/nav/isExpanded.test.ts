
import { isExpanded } from './isExpanded'

describe('isExpanded', () => {
    it('returns undefined when parentId is undefined', () => { // it means this is a child or no children node
        expect(isExpanded(undefined, 'a')).toBe(undefined)
    })
    it('returns true if selectedPath is the parent of parentId', () => {
        expect(isExpanded('x','x|y')).toBe(true)
    })
    it('returns false when path is from another parent', () => {
        expect(isExpanded('x','z|1')).toBe(false)
    })
})