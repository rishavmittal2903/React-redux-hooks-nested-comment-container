import React from "react";
import CustomButton from "../atoms/CustomButton";
import CustomTextArea from "../atoms/CustomTextArea";
import Heading from "../atoms/Heading"
interface IProps {
  onReply: (comment: string) => void;
  className?: string;
  buttonText: string;
  headingText?:string;
  headingType?:string;
}
const PostCommentSection = (props: IProps) => {
  const { onReply, className, buttonText, headingText, headingType="h1" } = props;
  const inputRef = React.useRef(null);
  const onReplyHandler = () => {
    const inputElem: any = inputRef.current;
    if (inputElem && inputElem?.value) {
      onReply(inputElem?.value);
    }
  };
  return (
    <div>
      <Heading headingType={headingType}>{headingText}</Heading>
    <div className={`replyContainer ${className}`}>
      <div className="textAreaContainer">
        <CustomTextArea ref={inputRef} />
      </div>
      <div className="buttonContainer">
        <CustomButton onClick={onReplyHandler}>{buttonText}</CustomButton>
      </div>
    </div>
    </div>
  );
};

export default PostCommentSection;
