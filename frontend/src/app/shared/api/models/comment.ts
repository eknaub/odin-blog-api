/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

export interface Comment {
  author: {
'id': number;
'username': string;
'email': string;
};
  content: string;
  createdAt: string;
  id: number;
  post: {
'id': number;
'title': string;
'content': string;
'published': boolean;
};
  updatedAt: string;
}
