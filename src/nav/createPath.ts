
import { INavViewProp } from "../types/INavViewProp";
import { PATH_SEPARATOR } from '../constants'

export const createPath = (props: INavViewProp) => {
    return props.parentId ? `${props.parentId}${PATH_SEPARATOR}${props.id}` : props.id
}