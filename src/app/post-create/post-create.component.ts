import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
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

  constructor(private router: Router){}

  postStar(rating : number){
    this.init = false;
    this.replaceStars(rating);
    console.log(rating);
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
}
