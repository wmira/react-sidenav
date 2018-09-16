
import { INavViewProp } from "../types/INavViewProp";

export const createPath = (props: INavViewProp) => {
    return props.parentId ? `${props.parentId}|${props.id}` : props.id
}