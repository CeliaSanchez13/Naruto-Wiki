export interface Comment {
    id:         string;
    date:       string;
    comment:    string;
    user:       string;
    image:      string;
    like:       number;
    dislike:    number;
    likeList:   any[];
    dislikeList:any[];
}