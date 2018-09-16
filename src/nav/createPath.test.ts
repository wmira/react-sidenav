import { PATH_SEPARATOR } from '../constants'

import { createPath } from './createPath'

describe('createPath', () => {
    it('creates path based on separator', () => {
        expect(
            createPath({ context: {selectedPath: '', template: {} }, parentId: 'y', id: 'x'})
        ).toBe(`y${PATH_SEPARATOR}x`)
    })
    it('returns only id is parentId is undefined', () => {
        expect(
            createPath({ context: {selectedPath: '', template: {} }, parentId: undefined, id: 'x'})
        ).toBe(`x`)
    })
})