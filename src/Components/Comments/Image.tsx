import {Image} from "react-bootstrap";

export const MyImage = ({src, height = "", width = "", classN = ""} : {src: string, height?: string, width?: string, classN?: string}) => {
    return (<Image className={classN} style={{height: height, width: width}}
                   src={src}/>)
}