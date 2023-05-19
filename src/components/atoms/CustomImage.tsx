import React from 'react';
const CustomImage=(props:React.HTMLProps<HTMLImageElement>)=>{
    return(
        <img {...props} alt={props?.alt}/>
    )
}

export default CustomImage;