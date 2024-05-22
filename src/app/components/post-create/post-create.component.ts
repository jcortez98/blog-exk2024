import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  date = new Date();
  pipe = new DatePipe('en-US');
  post : Post = new Post();
  grayStar: string = "w-6 h-6 ms-1 text-gray-300 dark:text-gray-500";
  yellowStar: string = "w-6 h-6 ms-1 text-yellow-300";
  stars: any[] = [
    {id:1 , class:this.grayStar },
    {id:2 , class:this.grayStar },
    {id:3 , class:this.grayStar },
    {id:4 , class:this.grayStar },
    {id:5 , class:this.grayStar },
  ];
  init = true;

  constructor(private router: Router, private postService: PostService){}

  postStar(rating : number){
    this.init = false;
    this.replaceStars(rating);
    this.post.raiting = rating;
  } 

  fillStars(): any[]{
    return this.stars;
  }

  replaceStars(rating : number){
    this.stars.forEach(star =>{
      if(star.id <= rating){
        star.class = this.yellowStar;
      }else{
        star.class = this.grayStar;
      }
    });    
  }

  getIndex(){
    this.router.navigate(['/indexPost'])
  }

  onSubmit(){
    this.createPost();
  }

  createPost(){
    this.postService.sendPost(this.post);
  }
}
