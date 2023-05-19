import React from 'react';
const CustomButton=(props:React.ComponentPropsWithoutRef<'button'>)=>{
    return(
        <button {...props}>
            {props.children}
        </button>
    )
}

export default CustomButton;