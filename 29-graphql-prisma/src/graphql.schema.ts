
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface NewPost {
    title: string;
    text: string;
}

export interface UpdatePost {
    id: string;
    title?: Nullable<string>;
    text?: Nullable<string>;
    isPublished?: Nullable<boolean>;
}

export interface Post {
    id: string;
    title: string;
    text: string;
    isPublished: boolean;
}

export interface IQuery {
    posts(): Post[] | Promise<Post[]>;
    post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

export interface IMutation {
    createPost(input: NewPost): Post | Promise<Post>;
    updatePost(input: UpdatePost): Nullable<Post> | Promise<Nullable<Post>>;
    deletePost(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

export interface ISubscription {
    postCreated(): Nullable<Post> | Promise<Nullable<Post>>;
}

type Nullable<T> = T | null;
