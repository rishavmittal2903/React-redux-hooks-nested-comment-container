import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { loadData, loadMore } from "../../store/actions/PostAction";
import CommentList from "../molecules/CommentList";
import PostCommentSection from "../molecules/PostCommentSection";
import ReadMore from "../molecules/ReadMore";

const Posts = () => {
  const { postData, maxCount, currentLoadedNumber } = useAppSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  const readMoreHandler = (countNumber: number) => {
    const count =
      currentLoadedNumber + maxCount > postData.length
        ? postData.length
        : currentLoadedNumber + maxCount;
    dispatch(loadMore(countNumber || count));
  };
  useEffect(() => {
    if (!postData.length) {
      dispatch(loadData());
    }
  }, [postData, dispatch]);
  const postHandler = () => {};
  return (
    <>
      <PostCommentSection
        buttonText="Post"
        onReply={postHandler}
        headingText="Post Comment"
        headingType="h2"
      />
      {postData.length ? (
        <CommentList comments={postData.slice(0, currentLoadedNumber)} />
      ) : null}
      <ReadMore
        postData={postData}
        maxCount={maxCount}
        currentLoadedNumber={currentLoadedNumber}
        readMoreHandler={readMoreHandler}
      />
    </>
  );
};

export default Posts;
