import { Injectable } from '@angular/core';
// import { users } from '../../../fakedata';
import { HttpService } from '../../http/http.service';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpService: HttpService) {}

  getPosts(url:string) {
    return this.httpService.fetchApi(url);
  }
  deletePost(index: number) {
    // users.splice(index - 1, 1);
  }
  addPost(data: {}) {
    // users.push(data);
  }
}
