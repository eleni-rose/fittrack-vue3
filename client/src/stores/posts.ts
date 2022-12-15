import { api } from "./session";

export function getPosts() {
  return api<ListEnvelope<Post>>('posts');
}
export function searchPosts() {
  return api<ListEnvelope<Post>>('posts');
}

export function getPost(id: string) {
  return api<Post>(`posts/${id}`)
}

export function addPost(post: Post) {
    return api<Post>(`posts`, post);
}

export function updatePost(id: string, post: Post) {
    return api<Post>(`posts/${id}`, post, 'PATCH');
}

export function deletePost(id: string) {
    return api<{deletedCount:boolean}>(`posts/${id}`,{}, 'DELETE');
}

export interface ListEnvelope<T> {
  posts: T[];
  total: number;
  skip: number;
  limit: number;
}

export interface Post {
  _id: string;
  username: string;
  displayName: string;
  profileImg: string;
  postText: string;
  postImg: string;
  postTag: string;
  timeDate: string;
}