import ImageComponent from "next/image";
import { useState } from "react";
const ImageNext = ({src, props}) => {
    const [loaded, setLoaded] = useState(false);
    const loadImageHandler = () => {
        setLoaded(true);
    }
    return(
        <>
            <ImageComponent {...{
                ...props,
                // width: !loaded ? '10px' : props.width,
                // height: !loaded ? '10px' : props.height
            }} onLoad={loadImageHandler} src={src || ""} alt={src || ""}/>
        </>
    )
}

export default ImageNext;