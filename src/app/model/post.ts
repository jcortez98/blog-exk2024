import { Time } from "@angular/common";

export class Post {
    idPost: number;
    titlePost: string;
    contentPost: string;
    author: string;
    aliasAuthor: string;
    postDate: Date;
    postTime: Time;
    raiting: number;
}
