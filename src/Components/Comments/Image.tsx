import {Image} from "react-bootstrap";

export const MyImage = ({src, height = "", width = ""} : {src: string, height?: string, width?: string}) => {
    return (<Image style={{height: height, width: width}}
                   src={src}/>)
}