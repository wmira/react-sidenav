import { PATH_SEPARATOR } from '../constants'

import { createPath } from './createPath'
import { baseTheme as theme } from '../theme'
import { Scheme } from 'react-sidenav/types/Scheme';
describe('createPath', () => {
    it('creates path based on separator', () => {
        expect(
            createPath({ context: { theme, selectedPath: '', template: {}, scheme: Scheme.default }, parentId: 'y', id: 'x'})
        ).toBe(`y${PATH_SEPARATOR}x`)
    })
    it('returns only id is parentId is undefined', () => {
        expect(
            createPath({ context: {theme, selectedPath: '', template: {}, scheme: Scheme.default }, parentId: undefined, id: 'x'})
        ).toBe(`x`)
    })
})