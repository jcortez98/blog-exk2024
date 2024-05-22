import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-list',
    standalone: true,
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.css',
})
export class PostListComponent implements OnInit{
  posts: Post[];
  stars : any[];
  dataRefresh: any;

  constructor(private postService : PostService, private router: Router){
  }

  ngOnInit(): void {
    this.postService.joinRoom("1");
    this.listenerMessage();
  }

  getStars(raiting: number): number[] {
    return new Array(raiting).fill(0);
  }

  createPost(){
    this.router.navigate(['createPost']);
  }

  listenerMessage(){
    this.postService.getMessageSubject().subscribe(message => {
      this.posts = message;
    });
  }
}
