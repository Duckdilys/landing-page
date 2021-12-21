import ImageComponent from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import {SerializeImage} from '../../../util';
import { Loading } from "..";
const ImageNext = ({src, props, sizeDefault}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [url, setUrl] = useState(SerializeImage(src, 15));
    const loadImageHandler = () => {
        setIsLoading(false);
    }
    useEffect(() => {
        if(window) {
            const image = new Image();
            image.onload = () => {
                if(image.width <= 256) {
                    setUrl(src);
                    return setIsLoading(false);
                }
                setIsLoading(true);
                
            };
            image.src = src;
        }
    }, [src]);
    useEffect(() => {
        if(!isLoading) {
            setUrl(SerializeImage(src, sizeDefault));
        }
    }, [isLoading, src, sizeDefault]);                                                                                                                                                                                                                                                                                                                                                                                                                           
    return(
        <>
        {/* {isLoading && <div><Loading/></div>}  */}
           <ImageComponent {...{
                ...props,
                loading: 'lazy'
            }} onLoad={() => setIsLoading(false)} className={isLoading ? 'hidden' : ''} src={url || ""} alt={url || ""}/> 
        </>
    )
}

export default ImageNext;