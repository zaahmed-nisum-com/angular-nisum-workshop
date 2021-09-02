import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/Posts';
import { PostService } from 'src/app/services/user/post/post.service';

@Component({
  selector: 'app-users',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  // posts: Posts[] = [];
  // newPost: any = {
  //   title: '',
  //   body: '',
  // };
  // isUpdateing: Boolean = false

  // tableColumns: string[] = [
  //   'id',
  //   'title',
  //   'body',
  // ];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    // this.getPosts();
  }

  // handleinput(event: any, label: string) {
  //   this.newPost[label] = event.target.value as string;
  // }

  // getPosts() {
  //   // this.posts = this.postService.getPosts('https://jsonplaceholder.typicode.com/posts');
  //   console.log(this.posts);
  // }

  // addPost() {
  //   this.newPost.id = this.posts.length+1;
  //   this.newPost.CreatedAt = "12-12-12" 
  //   this.postService.addPost(this.newPost);
  //   this.newPost = {
  //     firstName: '',
  //     lastName: '',
  //     role: '',
  //   }
  //   this.getPosts();
  // }

  // updateHandle(updateItemIndex: any) {
  //   let updateingUser = this.posts.filter(item => item.id == updateItemIndex);
  //   this.newPost.firstName = updateingUser[0].title;
  //   this.newPost.lastName = updateingUser[0].body
  //   this.newPost.role = updateingUser[0].role;
  //   this.isUpdateing = true
  // }

  // deleteHandle(newItem: any) {
  //   this.postService.deletePost(newItem);
  //   this.getPosts();
  // }


}
