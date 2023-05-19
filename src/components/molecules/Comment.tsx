import { useContext } from "react";
import { useDispatch } from "react-redux";
import userContext from "../../context/UserContext";
import { useAppSelector } from "../../hooks/useAppSelector";
import { IComment } from "../../model/interfaces/IComment";
import {
  deleteComment,
  likeComment,
  loadMoreNestedPost,
} from "../../store/actions/PostAction";
import CustomButton from "../atoms/CustomButton";
import CustomImage from "../atoms/CustomImage";
import {
  CommentIcon,
  DeleteIcon,
  EditIcon,
  LikeIcon,
  ShareIcon,
  UnLikeIcon,
} from "../atoms/Icons";
import CommentList from "./CommentList";
import ReadMore from "./ReadMore";
interface IProps {
  className?: string;
  commentData: IComment;
  parentId: string;
}
const Comment = (props: IProps) => {
  const {
    commentData: {
      image,
      name,
      id,
      date,
      numberOfLikes,
      comment,
      comments,
      accessPolicy,
      nestedCommentCount = 0,
      currentCountNumber = 0,
    },
    parentId,
    className,
  } = props;
  const nestedMaxCount = useAppSelector((state) => state.posts.nestedMaxCount);
  const { loggedUserId } = useContext(userContext);
  const dispatch = useDispatch();
  const readMoreHandler = (countNumber: number) => {
    const count: number =
      currentCountNumber + nestedMaxCount > nestedCommentCount
        ? nestedCommentCount
        : currentCountNumber + nestedMaxCount;
    dispatch(loadMoreNestedPost(parentId, id, countNumber || count));
  };
  const likeCommentHandler = () => {
    const count: number = (numberOfLikes || 0) + 1;
    dispatch(likeComment(parentId, id, count));
  };
  const deletePostHandler = () => {
    dispatch(deleteComment(parentId, id, 0));
  };
  return (
    <>
      <div className={`commentContainer ${className}`}>
        <div className="headerSection">
          <div className="image">
            <CustomImage src={image} alt={name} />
          </div>
          <div className="owner">{name}</div>
          <div className="date">{date}</div>
        </div>
        <div className="content">
          <p>{comment}</p>
        </div>
        <div className="footerSection">
          <div>
            <CustomButton onClick={likeCommentHandler}>
              {numberOfLikes ? <LikeIcon /> : <UnLikeIcon />}
              {numberOfLikes !== 0 && <div>{numberOfLikes}</div>}
            </CustomButton>
            <CustomButton>
              <CommentIcon />
            </CustomButton>
            {accessPolicy?.canEdit && loggedUserId === id && (
              <CustomButton>
                <EditIcon />
              </CustomButton>
            )}
          </div>
          <div>
            {/* {accessPolicy?.canDelete && loggedUserId === id && ( */}
              <CustomButton onClick={deletePostHandler}>
                <DeleteIcon />
              </CustomButton>
            {/* )} */}
            {accessPolicy?.canShare && loggedUserId === id && (
              <CustomButton>
                <ShareIcon />
              </CustomButton>
            )}
          </div>
        </div>
      </div>
      {comments.length ? (
        <div className="nested-comment-stack">
          <div className="nested-comments">
            <CommentList comments={comments.slice(0, nestedMaxCount)} parentId={parentId}/>
          </div>
        </div>
      ) : null}
      <ReadMore
        postData={comments}
        maxCount={nestedMaxCount}
        currentLoadedNumber={currentCountNumber}
        readMoreHandler={readMoreHandler}
      />
    </>
  );
};

export default Comment;
