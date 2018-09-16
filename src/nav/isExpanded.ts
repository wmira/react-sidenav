import { PATH_SEPARATOR } from "../constants";


export const isExpanded = (parentId: string, selectedPath: string): boolean | undefined => {
    const selectedPathArr = selectedPath.split(PATH_SEPARATOR)
    if ( parentId === undefined) {
        return undefined // child
    }
    return ( selectedPathArr[0] === parentId )
}
