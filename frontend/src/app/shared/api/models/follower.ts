/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

export interface Follower {
  follower?: {
'id': number;
'username': string;
'email': string;
'createdAt': string;
'updatedAt': string;
'followersCount'?: number;
'followingCount'?: number;
};
  followerId: number;
  following?: {
'id': number;
'username': string;
'email': string;
'createdAt': string;
'updatedAt': string;
'followersCount'?: number;
'followingCount'?: number;
};
  followingId: number;
  id: number;
}
