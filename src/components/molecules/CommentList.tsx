import { IComment } from "../../model/interfaces/IComment";
import Comment from "./Comment";
interface IProps {
  comments: IComment[];
  parentId?:string | any;
}
const CommentList = (props: IProps):any => {
  const { comments, parentId } = props;
  return comments.map((commentData: IComment) => (
    <div className="comment-stack" key={commentData.id}>
      <Comment commentData={commentData} parentId={parentId || commentData.id} />
    </div>
  ));
};

export default CommentList;
