export interface IComment{
    image:string,
    id:string,
    name:string,
    date:string,
    comment:string,
    accessPolicy?:IRBAC,
    numberOfLikes?:number,
    nestedCommentCount?:number,
    currentCountNumber?:number,
    comments:Array<IComment>
}

export interface IRBAC{
    canDelete:boolean;
    canEdit:boolean;
    canShare:boolean;
}