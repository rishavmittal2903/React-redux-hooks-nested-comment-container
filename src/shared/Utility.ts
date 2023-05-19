import { OPERATION } from "../model/interfaces/enum";
import { IComment } from "../model/interfaces/IComment";

export const bindNestedPostCount = (postData: Array<IComment>) => {
  for (let post of postData) {
    const { comments } = post;
    post.nestedCommentCount = comments.length;
    if (comments.length) {
      bindNestedPostCount(comments);
    }
  }
};

export const appendNestedCountWithPosts = (
  postData: Array<IComment>
): Array<IComment> => {
  const data: Array<IComment> = [...postData];
  for (let comment of data) {
    const { comments } = comment;
    comment.nestedCommentCount = comments.length;
    if (comments.length) {
      bindNestedPostCount(comments);
    }
  }
  return data;
};

export const updateNestedPostPostByKey = (
  parentCommentId: string,
  nestedCommentId: string,
  postData: Array<IComment>,
  count: number,
  keyType: string,
  operationType?: OPERATION
) => {
  const data: Array<IComment> = [...postData];
  data.forEach((comment: IComment | any, index: number) => {
    if (comment.id === parentCommentId) {
      const getInnerCommentData = (commentData: Array<IComment | any>) => {
        if (parentCommentId !== nestedCommentId) {
          for (let i = 0; i < commentData.length; i++) {
            if (commentData[i].id === nestedCommentId) {
              switch (operationType) {
                case OPERATION.DELETE: {
                  delete commentData[i];
                  break;
                }
                default: {
                  commentData[i][keyType] = count;
                }
              }
            } else {
              getInnerCommentData(commentData[i].comments);
            }
          }
        } else {
          switch (operationType) {
            case OPERATION.DELETE: {
              delete data[index];
              break;
            }
            default: {
              comment[keyType] = count;
            }
          }
        }
      };
      getInnerCommentData(comment.comments);
    }
  });
  return data;
};
