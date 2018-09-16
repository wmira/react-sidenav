import { PATH_SEPARATOR } from '../constants'

import { createPath } from './createPath'
import { theme } from '../templates/Basic'
describe('createPath', () => {
    it('creates path based on separator', () => {
        expect(
            createPath({ context: { theme, selectedPath: '', template: {} }, parentId: 'y', id: 'x'})
        ).toBe(`y${PATH_SEPARATOR}x`)
    })
    it('returns only id is parentId is undefined', () => {
        expect(
            createPath({ context: {theme, selectedPath: '', template: {} }, parentId: undefined, id: 'x'})
        ).toBe(`x`)
    })
})