import CustomButton from "../atoms/CustomButton";
import React from "react";
interface IReadMore {
  postData: Array<any>;
  readMoreHandler: (count: number) => void;
  currentLoadedNumber: number;
  maxCount: number;
}
const ReadMore = (props: IReadMore) => {
  const { postData, currentLoadedNumber, maxCount, readMoreHandler } = props;
  return (
    <>
      {postData.length > maxCount && postData.length > currentLoadedNumber ? (
        <CustomButton onClick={() => readMoreHandler(0)} className="link">
          Read More
        </CustomButton>
      ) : null}
      {(postData.length <= currentLoadedNumber  && currentLoadedNumber!==0 )? (
        <CustomButton
          onClick={() => readMoreHandler(maxCount)}
          className="link"
        >
          Read Less
        </CustomButton>
      ) : null}
    </>
  );
};

export default React.memo(ReadMore);
