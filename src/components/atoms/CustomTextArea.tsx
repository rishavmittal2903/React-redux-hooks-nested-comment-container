import React from "react";

const CustomTextArea = React.forwardRef((props: React.HTMLProps<HTMLTextAreaElement>,ref:any) => {
  return <textarea ref={ref}  {...props}>{props.children}</textarea>;
});

export default CustomTextArea;
