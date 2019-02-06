import { PATH_SEPARATOR } from "../constants";


export const isExpanded = (pathId: string, selectedPath: string | undefined): boolean | undefined => {
    if ( pathId  && selectedPath ) {
        const selectedPathArr = selectedPath.split(PATH_SEPARATOR)
        const pathIdArr = pathId.split(PATH_SEPARATOR)
        // if they have same parent
        return ( pathIdArr[0] === selectedPathArr[0])
    }

    return false

}
