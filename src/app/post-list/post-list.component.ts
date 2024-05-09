import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.css',
})
export class PostListComponent implements OnInit{
  posts : Post[];
  stars : any[];

  constructor(private postService : PostService){}

  ngOnInit() {
    this.getPost();
  }

  private getPost(){
    this.postService.getPosts().subscribe(
      (data => {
        this.posts = data;
      })
    );
  }

  getStars(raiting: number): number[] {
    return new Array(raiting).fill(0);
  }
}
