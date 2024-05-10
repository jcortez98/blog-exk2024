import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.css',
})
export class PostListComponent implements OnInit{
  posts: Post[];
  stars : any[];
  dataRefresh: any;

  constructor(private postService : PostService, private router: Router){}

  ngOnInit(): void {
    this.getPost();
    console.log(this.posts);
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

  createPost(){
    this.router.navigate(['createPost']);
  }
}
