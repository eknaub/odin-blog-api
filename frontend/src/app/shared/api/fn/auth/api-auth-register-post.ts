/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserPost } from '../../models/user-post';
import { UserRegisterRes } from '../../models/user-register-res';

export interface ApiAuthRegisterPost$Params {
      body: UserPost
}

export function apiAuthRegisterPost(http: HttpClient, rootUrl: string, params: ApiAuthRegisterPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UserRegisterRes>> {
  const rb = new RequestBuilder(rootUrl, apiAuthRegisterPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserRegisterRes>;
    })
  );
}

apiAuthRegisterPost.PATH = '/api/auth/register';
